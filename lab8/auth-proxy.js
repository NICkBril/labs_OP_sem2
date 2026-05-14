class AuthProxy {
  constructor(targetClient, strategy) {
    this.target = targetClient;
    this.auth = strategy;
  }

  async request(req) {
    const authHeaders = this.auth.getAuthHeaders();
    const updatedHeaders = Object.assign({}, req.headers, authHeaders);
    const authorizedRequest = Object.assign({}, req, { headers: updatedHeaders });

    let result = await this.target.request(authorizedRequest);

    if (result.status === 401 && typeof this.auth.tryRefresh === 'function') {
      const refreshed = await this.auth.tryRefresh();
      
      if (refreshed) {
        console.log('>>> [Auth]: Token refreshed, retrying request...');
        const newAuthHeaders = this.auth.getAuthHeaders();
        authorizedRequest.headers = Object.assign({}, req.headers, newAuthHeaders);
        return this.target.request(authorizedRequest);
      }
    }

    return result;
  }
}

module.exports = { AuthProxy };
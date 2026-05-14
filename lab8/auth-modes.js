class StaticKeyAuth {
  constructor(key) {
    this.key = key;
  }

  getAuthHeaders() {
    return { 'x-api-key': this.key };
  }
}

class BearerTokenAuth {
  constructor(token) {
    this.currentToken = token;
  }

  getAuthHeaders() {
    return { 'Authorization': `Bearer ${this.currentToken}` };
  }

  async tryRefresh() {
    console.log('>>> [Auth]: Attempting token refresh...');
    this.currentToken = 'refreshed-token-' + Date.now();
    return true; 
  }
}

module.exports = { StaticKeyAuth, BearerTokenAuth };
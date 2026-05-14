class NetworkClient {
  async request(options) {
    const { url, method = 'GET', headers = {}, body = null } = options;

    const config = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    };

    const res = await fetch(url, config);
    const data = await res.json().catch(() => null);
    
    return {
      status: res.status,
      payload: data
    };
  }
}

module.exports = { NetworkClient };
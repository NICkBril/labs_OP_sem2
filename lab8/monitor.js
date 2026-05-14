class RequestMonitor {
  constructor(innerClient) {
    this.inner = innerClient;
  }

  async request(req) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] CALL: ${req.method || 'GET'} -> ${req.url}`);

    const startTime = Date.now();
    const result = await this.inner.request(req);
    const duration = Date.now() - startTime;

    console.log(`[${timestamp}] STATUS: ${result.status} (${duration}ms)`);
    return result;
  }
}

module.exports = { RequestMonitor };
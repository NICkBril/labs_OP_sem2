const { NetworkClient } = require('./network');
const { AuthProxy } = require('./auth-proxy');
const { RequestMonitor } = require('./monitor');
const { PostService } = require('./post-service');
const { BearerTokenAuth } = require('./auth-modes');

const baseNetwork = new NetworkClient();
const myAuth = new BearerTokenAuth('expired-token');

const authClient = new AuthProxy(baseNetwork, myAuth);
const client = new RequestMonitor(authClient);

const service = new PostService(client);

async function startLab() {
  console.log('--- LAB 8 ---\n');
  
  const output = await service.fetchFirstPost();
  
  console.log('\n--- RESULT ---');
  console.log('Status Code:', output.status);
  console.log('Payload:', output.payload);
}

startLab();
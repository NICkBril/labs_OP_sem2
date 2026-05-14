# Lab 8 – Implementing an Authentication Proxy for an API Service

Create an authentication proxy that acts as an intermediary between a client and an API service. The proxy should inject credentials into HTTP requests and handle authentication-related concerns.

Requirements:
1. Proxy Implementation
   - Implement a wrapper around HTTP requests to intercept and modify them.
   - Inject authentication headers, tokens, or API keys before forwarding requests.
   - Support different authentication methods.
2. Extra Features:
   - Handle automatic token renewal if a token expires.
   - Provide logging/monitoring for API requests.
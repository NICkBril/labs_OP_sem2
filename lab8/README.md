# Lab 8 – Authentication Proxy for an API Service

This project shows how to use the Proxy pattern and Dependency Injection (DI) to separate network requests, logging, and authorization logic into independent layers.

## Architecture Description
The program is split into three main layers that do not depend on each other directly:
1. **Base Client (`network.js`)** – A simple wrapper around fetch that only sends requests and returns responses. It doesn't know anything about tokens or auth headers.
2. **Proxies (`auth-proxy.js`, `monitor.js`)** – Intermediary classes that wrap the base client. `AuthProxy` adds authorization headers and handles 401 errors (token refresh), while `RequestMonitor` tracks execution time and logs requests.
3. **Service (`post-service.js`)** – High-level service that needs to load data. It receives an HTTP client via its constructor, so it doesn't care if it's a raw network client or a proxy chain.

## Files
- `network.js` – base HTTP client implementation
- `auth-modes.js` – auth strategies (Static Key and Bearer Token)
- `auth-proxy.js` – proxy for managing credentials and token updates
- `monitor.js` – proxy for console logging and timing
- `post-service.js` – consumer service (fetches posts)
- `app.js` – application entry point where all components are wired together
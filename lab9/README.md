# Lab 9 – Logging Decorator with Configurable Log Levels

This project implements a logging system using the Decorator pattern. It allows wrapping any function (sync or async) and logging its performance and data.

## Features
- **Flexible formatting:** Text and JSON formatters.
- **Multiple outputs:** Support for console and file logging.
- **Log Levels:** DEBUG, INFO, and ERROR thresholds.
- **Profiling:** Execution time is measured for each call.

## Structure
- `logger-base.js` – Core components for formatting and output.
- `logger-service.js` – Filtering logic.
- `log-decorator.js` – The main decorator wrapper.
- `app.js` – Application setup and demonstration.
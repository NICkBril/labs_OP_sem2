# Lab 7 – Reactive Communication with EventEmitter

This lab demonstrates reactive communication between entities using a custom EventEmitter.

Features:
- custom implementation of EventEmitter
- subscribe / unsubscribe functionality
- multiple listeners reacting to the same event independently
- error handling using try/catch inside emit
- separate "error" event channel
- fallback error logging if no error listeners are present

Files:

event-emitter.js – main logic  
test.js – demo test
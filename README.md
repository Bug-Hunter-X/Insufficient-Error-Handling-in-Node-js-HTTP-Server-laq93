# Insufficient Error Handling in Node.js HTTP Server

This repository demonstrates a common but easily overlooked error in Node.js: insufficient error handling within an HTTP server. The example code includes a function that might throw an error.  The server catches the error but responds with a generic 500 status code and message, making debugging difficult.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a more robust solution.

## Bug

The primary issue lies in the lack of specific error handling.  Production-level servers should provide more informative error messages, potentially logging detailed stack traces for debugging purposes and perhaps returning more descriptive HTTP error codes.
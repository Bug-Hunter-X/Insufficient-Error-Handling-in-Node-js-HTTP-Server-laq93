const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Simulate an error
    const result = someFunctionThatMightThrowAnError();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    // Log the error
    console.error('Error:', error);
    // Send a generic error response without specific error details
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someFunctionThatMightThrowAnError() {
  // Simulate an error condition
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success';
}
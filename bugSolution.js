const http = require('http');

const server = http.createServer((req, res) => {
  try {
    const result = someFunctionThatMightThrowAnError();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    console.error('Error:', error);
    // Send a detailed error response
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someFunctionThatMightThrowAnError() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success';
}
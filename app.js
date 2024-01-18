const express = require('express');
const app = express();

// Set the server to listen on the provided port or default to port 3000
const port = process.env.PORT || 3000;

// Route handler for the root path (/)
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route handler for the /about path
app.get('/about', (req, res) => {
  res.send('About page');
});

// 404 error handler for undefined routes
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the web server and log a message once it starts successfully
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


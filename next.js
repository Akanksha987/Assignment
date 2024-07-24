const express = require('express');
const app = express();

const logRequest = (req, res, next) => {
  const currentTime = new Date().toISOString();
  const requestedUrl = req.originalUrl;

  console.log(`[${currentTime}] Requested URL: ${requestedUrl}`);
  next();
};

app.use(logRequest);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

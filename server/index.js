const express = require('express');
const app = express();
const path = require('path');
const distFolder = path.join(__dirname, '..', 'app', 'dist');

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

const serveStatic = express.static(distFolder);

app.use(logRoutes);
app.use(serveStatic);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});
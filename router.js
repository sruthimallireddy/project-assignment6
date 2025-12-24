const fs = require('fs').promises;
const path = require('path');

async function serveFile(res, filePath, statusCode = 200, contentType = 'text/html') {
  try {
    const data = await fs.readFile(filePath);
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(data);
  } catch (error) {
    serve404(res);
  }
}

async function serve404(res) {
  const filePath = path.join(__dirname, 'pages', '404.html');
  const data = await fs.readFile(filePath);
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(data);
}

module.exports = async (req, res) => {
  const url = req.url;

  if (url === '/home') {
    serveFile(res, path.join(__dirname, 'pages', 'home.html'));
  } 
  else if (url === '/about') {
    serveFile(res, path.join(__dirname, 'pages', 'about.html'));
  } 
  else if (url === '/contact') {
    serveFile(res, path.join(__dirname, 'pages', 'contact.html'));
  } 
  else if (url === '/style.css') {
    serveFile(
      res,
      path.join(__dirname, 'public', 'style.css'),
      200,
      'text/css'
    );
  } 
  else {
    serve404(res);
  }
};
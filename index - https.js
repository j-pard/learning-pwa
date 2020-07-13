const express = require('express')
const path = require('path')
const fs = require('fs')
const key = fs.readFileSync('./certs/key.pem');
const cert = fs.readFileSync('./certs/cert.pem');
const https = require('https');

const PORT_HTTPS = 5001;

const app = express();
const server = https.createServer({key: key, cert: cert }, app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.listen(PORT_HTTPS, () => {
      console.log("Server running on port " + PORT_HTTPS);
});

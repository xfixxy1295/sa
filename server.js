const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 443;
app.use('/upload', express.static('upload'))
app.use('/css', express.static('css'))
app.use('/fonts', express.static('fonts'))
app.use('/game', express.static('game'))
app.use('/img', express.static('img'))
app.use('/images', express.static('images'))
app.use('/js', express.static('js'))

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

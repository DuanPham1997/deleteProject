const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(_dirname + './dist/delete-project'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(_dirname + '/dist/delete-project/index.html')),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

console.log('console listening')
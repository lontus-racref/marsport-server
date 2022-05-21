// Importing express module
const express = require('express')
const cors = require('cors')
const app = express()
const get_id = require('./services/u_cc_gen')
 
app.use(express.json())

app.options('/', cors())
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
app.post('/', (req, res) => {
    const { g, p } = req.body;

    let result = get_id(p, g)

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({result}));
});
 
app.listen(5000, () => {
  console.log('Our express server is up on port 5000');
});
/*
*   RESTfull server to create BGL in RUNSCOPE
*   current status: prototype
*   author: albo
*/
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path');
const app = express()
app.use(express.static('./'));
app.set('view engine', 'ejs');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.get('/health-check', function (req, res) {
    res.send({ 'body': 'Hello World' })
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'))
})


app.listen(port, ip, function () {
    console.log('Server running on http://%s:%s', ip, port);
})

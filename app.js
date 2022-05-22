const express = require('express');
const cors = require('cors');
const config = require('./config.json');
const ITS_Tag = require('./obj.js');
// let myData= require('./src/json/Dictionary.json');
// console.log(myData)

// Create Express Server
const app = express();
// allow cros
app.use(cors());
var cookie;

app.use('/static', express.static('./'));

let tags = [
    new ITS_Tag('TEP', 0, 60),
    new ITS_Tag('HUM', 40, 100),
    new ITS_Tag('PM25', 20, 110),
    new ITS_Tag('HCHO', 0, 3),
    new ITS_Tag('CO2', 0, 4000),
    new ITS_Tag('O3', 0.1, 0.7),
    new ITS_Tag('_other', 0, 100),
]

app.post('/jsonrpc/public', (req, res) => {
    res.send({result: true});
});

app.post('/jsonrpc/var', (req, res) => {
    let data = Object.fromEntries(tags.map(
        t => [t.name, t.random()]
    ));
    res.send({result: {data: data}});
});

// Start Proxy
app.listen(config.ITS_proxy.port, config.ITS_proxy.ip, () => {
    console.log(`Starting Proxy at http://${config.ITS_proxy.ip}:${config.ITS_proxy.port}/static/index.html`);
});

function relayRequestHeaders(proxyReq, req) {
    if (cookie) {
        proxyReq.setHeader('cookie', cookie);
        console.log(proxyReq.getHeader('Cookie'));
    }
};

function relayResponseHeaders(proxyRes, req, res) {
    var proxyCookie = proxyRes.headers["set-cookie"];
    if (proxyCookie) {
        cookie = proxyCookie;
    }
};

module.exports = config;

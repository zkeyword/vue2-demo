var express = require('express'),
    app = express(),
    Mock = require('mockjs'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', function (req, res) {
    if (req.body.username == 'a' && req.body.password == 'a') {
        var data = { }
    } else {
        var data = { "time": "2016-05-05 16:43:59", "status": 2, "msg": "登录失败" }
    }
    res.send(JSON.stringify(data, null, 4));
});

module.exports = app;

const express = require('express');
const app = express();
const fs = require('fs');

app.listen(8080, function() {
    console.log('listening on 8080')
})
app.get('/', function(req, res) { 
    res.sendFile(__dirname + "/mypage.html")
})

app.get('/home', function(req,res){
    res.sendFile(__dirname + "/home.html")
})

app.get('/link', function(req,res){
    res.sendFile(__dirname + "/link.html")
})

app.get('/animal', function(req,res){
    res.sendFile(__dirname + "/animal.html")
})

app.get('/animal-c', function(req,res){
    res.sendFile(__dirname + "/animal-c.html")
})

app.get('/fruit', function(req,res){
    res.sendFile(__dirname + "/fruit.html")
})

app.get('/hallym', function(req,res){
    res.sendFile(__dirname + "/hallym.html")
})

app.get('/mypage', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/me/1', function(req, res){
    fs.readFile('./images/me1.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})

app.get('/me/2', function(req, res){
    fs.readFile('./images/me2.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})

app.get('/me/3', function(req, res){
    fs.readFile('./images/me3.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})

app.get('/me/4', function(req, res){
    fs.readFile('./images/me4.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})

app.get('/outside', function(req, res){
    fs.readFile('./images/outside.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})

app.get('/img/1', function(req, res){
    fs.readFile('./images/img1.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})
app.get('/img/2', function(req, res){
    fs.readFile('./images/img2.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})
app.get('/img/3', function(req, res){
    fs.readFile('./images/img3.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})
app.get('/img/4', function(req, res){
    fs.readFile('./images/img4.jpg', function(err, data){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})
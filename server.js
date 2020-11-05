var express = require ('express');
var app =  express();

var mysql = require('mysql');
var bodyParser = require('body-parser')
//const { json } = require('express');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
host:'localhost',
port:'8889',
user:'root',
password:'',
database:'WOC',


});

var server = app.listen(3540,function(){

var host =server.address().address
var port =server.address().port

});

con.connect(function(error){
if(error) console.log(error);
else console.log("connected");
});

app.get('/users',function(req ,res){

    con.query('select* from log', function(error, rows ,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});
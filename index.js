var express = require('express');
var user = require('./user.json');
var todos = require('./todos.json');
var app = express();
var userDetails = JSON.stringify(user);
var todoDetails = JSON.stringify(todos);
var userData={};

app.get('/:id',function(req,res){
var id = req.params.id;
for(var i=0;i<userDetails.length;i++){
if (user.user.userid === id ){


userData=user.user;

}}

for(var i=0;i< todoDetails.length;i++){

if (todos.todos.userid === userData.userid){

if(todos.todos.done === "false"){

res.send(JSON.stringify(userData) +""+JSON.stringify(todos.todos.text));

}else{
res.send("no active task for this userid"+JSON.stringify(userData));

}


}

}


});

app.get('/todos/:id',function(req,res){
var id = req.params.id;
for(var i=0;i< todoDetails.length;i++){
if (todos.todos.id === id ){
res.send(JSON.stringify(todos.todos));


}
}

});




app.get('/activeuser',function(req,res){


var activeUser = {};
for(var i=0;i< userDetails.length;i++){

if(user.user.isActive === "true"){

activeUser = user.user;


}
}

for(var i=0;i< todoDetails.length;i++){

if (todos.todos.userid === activeUser.userid){

res.send(JSON.stringify(activeUser) +""+JSON.stringify(todos.todos));


}

}

});


app.listen(3017,function(){
console.log('server is listening at 3017........');

});
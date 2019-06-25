var express=require ('express');
var app=express();

var studentcon=function(req,res){
	var student=[
	{name:'komal',age:22},
		{name:'mayu',age:23},
		{name:'sahil',age:22}
		];
		res.send(student);
	
};


app.get('/students',studentcon);
var server=app.listen(8083);
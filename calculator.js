//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
  // console.log(__dirname);
})

app.post("/",function(req,res){
  console.log(req.body);
  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);
  var sum= num1+num2;
  res.send("the result is "+sum);
})

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator",function(req,res){
  console.log(req.body);
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=weight/(height*height);
  res.send("the BMI result is "+bmi);
})

app.listen(3000,function(){
  console.log("server is running on port 3000.");
})

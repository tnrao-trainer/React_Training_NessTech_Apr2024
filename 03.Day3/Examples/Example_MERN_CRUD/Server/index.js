var express = require('express');
var bodyParser = require("body-parser");
var DeptModel  = require("./models/deptModel");
var cors = require("cors");  

var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Read All
app.get( '/Depts', async function (req,res)
{ 
     //   DeptModel.find( function(err,  result)
			let result  =  await	DeptModel.find({}, {"_id":0}); 

			try {
						console.log("[ReadAll] - No. of  items get from database : "+  result.length);
						res.send(result);		
			  } 
			  catch (error) 
			  {
				response.status(500).send(error);
			  }
		   
                
});

// Read Single
app.get( '/Depts/:id',  async function (req,res)
{  
        var dno =  req.params.id;   
	    
        let result  =  await DeptModel.findOne({ Deptno: dno}, {"_id":0} );         
		console.log("[Read Single] - " + JSON.stringify(result));
		res.send(result);        
});
 
app.post( '/Depts',  async  function (req,res)
{ 
        var deptObj  = new  DeptModel({ 
                Deptno : parseInt(req.body.Deptno),	
                Dname  :  req.body.Dname,
                Loc   : req.body.Loc  });

        // Logic to insert new dept in database
        let newObj  =  await  deptObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});
 
app.put( '/Depts',  async function (req,res)
{ 
        var deptObj  = {};
        deptObj.Deptno = parseInt(req.body.Deptno);
        deptObj.Dname =  req.body.Dname;
        deptObj.Loc =  req.body.Loc; 

        // Logic to insert new dept in database
        let resResult  = await  DeptModel.findOneAndUpdate(  {Deptno:deptObj.Deptno},   {  $set : deptObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
    
           
});
 
app.delete( '/Depts/:id',async function (req,res)
{  
        var dno =  req.params.id;   

       let resResult  =  await  DeptModel.findOneAndRemove({ Deptno: dno}); 
	 var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});

var server=app.listen(3002,function() {});
console.log("Server Started. URL:http://localhost:3002");




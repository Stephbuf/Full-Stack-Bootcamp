const express = require('express'); //importing express package 
const app = express(); //creating a web app via express
const {add, sub, mul, div, module_name} = require('./arithmatic_calc'); //importing custom module
//const arithmatic_calc = require('./arithmatic_calc'); //importing custom module (second way)

app.use(globalMiddleware); //GLobal Middleware
app.use(globalMiddleware2); //GLobal Middleware

function globalMiddleware(req,res,next) {
    console.log('Global middleware 1');
    next();
}
function globalMiddleware2(req,res,next) {
    console.log('Global middleware 2');
    next();
}

//home route
//req: Request, res: Response
app.get('/', function(req, res){
    //const result = sub(23,44); //included with second way of importing custom module
    const val1 = 45;
    const val2 = 10;
    const result = `Substraction: ${sub(val1, val2)}, Addition: ${add(val1, val2)},Multiplication: ${mul(val1, val2)}, Division: ${div(val1, val2)}`;

     
    res.send(result); //sending a respone to frontend 
});

app.get('/about', function(req, res){
    res.send('About Page');
    res.send('About Page');
});

app.get('/contact', function(req, res){
    res.send('Contact Page');
});


//create web server

app.listen(3000, function(){
    console.log('Server running on port 3000...');
});






//"node index.js" to run app
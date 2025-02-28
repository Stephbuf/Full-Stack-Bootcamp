var express = require('express');
var app = express();
function custom_middleware(req, res, next) {
console.log('I AM WORKING FINE');
next();
}

app.use(custom_middleware);

app.get('/', (req, res)=>{
    res.send('Welcome to The Home Page');
    });

    
app.listen(3000, ()=>{console.log('The Server is ON');});
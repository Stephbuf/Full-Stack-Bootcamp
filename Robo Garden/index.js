const figlet = require('figlet');
console.log(figlet.textSync('yeah' , {
    Font: 'ghost',  
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));
figlet.text('okay', {font: 'ghost', horizontalLayout: 'default', verticalLayout: 'default'}, (err,data) => {
    if (!err) {
        console.log(data);}
    else {
        console.log(err);
    }
});
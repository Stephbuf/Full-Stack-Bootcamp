var exports = module.exports = {}

exports.sayHelloworld = function() {
    console.log('HELLO WORLD');
   };

   module.exports = {
    sayHelloworld: function(){
      console.log('HELLO WORLD');
    }
};
   
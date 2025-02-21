
// Polymorphism 

class Animal{
    speak(){ }
}



// static variable 

const { application } = require("express");

class Settings{
    HOST = "localhost"
    PORT = 8888
    API_KEY = "someLargeRandomSecret"
}
construcor(){
    this.session = createSession();
}

#createSession(){

}


let config_PAGE1 = new Settings();

let config_PAGE2 = new Settings();

Settings.HOST = "https://localhost";

console.log(Settings.HOST)


//Static Method

class MathUtils{
    static add(a, b){
        return a+b;
    }
}

//Private Fields

class Student{
    #name
    constructor(name){
        this.setName(name)
    }
}
//Getters and Setters
getName(){
    return this.#name;
}

setName(name){
this.name = this.name.toUpperCase()
}


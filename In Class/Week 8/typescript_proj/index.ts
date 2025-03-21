let firstName:string = "Stephanie";
firstName = "Monica";

// Primitive data types
//String, number, boolean, any, undefined, null

//number
let num1:number = 34;
let num2:number = 56.8;
console.log(num1 + num2);

//boolean
let isActive:boolean = true;

//any
let x:any = "Jonathan";
x = 23;

//undefined
let y:undefined = undefined;

//null
let z:null = null;

// User-defined data types 
// Array of objects 
let students: Istudent[] = [
    {id: 1, name: 'John Wick', department: 'Music'},
    {id: 2, name: 'Jennier Lopez', department: 'Art'},
    {id: 3, name: 'Ben Ken', department: 'Mathematics'},
];

//Interface
interface Istudent {
    id: number;
    name: string;
    department: string;
}

let student1: Istudent = {id: 4, name: 'Sabrina Carpenter', department: 'Acting'};

// Class
class student {
    //properties-> Id, name, department. Have to use "this.id, this.name" etc.. to refer to properties 
    id: number;
    name: string;
    department: string;

    //constructor-> function
    //defining default values for properties 
    constructor(_id: number, _name: string, _department: string){
        this.id = _id;
        this.name = _name;
        this.department = _department;

    }
    //methods === JS function 
    printDetails(): string{
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}
// creating a new instance of class Student 
let student2 = new student(5, 'Jonathan Cubbage', 'Trades');
let student3 = new student(6, 'Monica Rivera', 'Logistics');
console.log(student2.printDetails()); 
console.log(student3.printDetails());

// Class inheritance 
class Undergrad extends student {
    country: string;

    constructor(_id: number, _name: string, _department: string, _country: string){
        super(_id, _name, _department); //calling the parent class constructor
        this.country = _country;
    }
    printDetails(){
        return super.printDetails() + `, Country: ${this.country}`;
    }
    
}

let student4 = new Undergrad(7, 'Eric Marshall', 'Business', 'Canada');
console.log(student4.printDetails());

// Class inheritance 
class UPostgrad extends student {

}


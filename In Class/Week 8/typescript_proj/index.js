var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstName = "Stephanie";
firstName = "Monica";
// Primitive data types
//String, number, boolean, any, undefined, null
//number
var num1 = 34;
var num2 = 56.8;
console.log(num1 + num2);
//boolean
var isActive = true;
//any
var x = "Jonathan";
x = 23;
//undefined
var y = undefined;
//null
var z = null;
// User-defined data types 
// Array of objects 
var students = [
    { id: 1, name: 'John Wick', department: 'Music' },
    { id: 2, name: 'Jennier Lopez', department: 'Art' },
    { id: 3, name: 'Ben Ken', department: 'Mathematics' },
];
var student1 = { id: 4, name: 'Sabrina Carpenter', department: 'Acting' };
// Class
var student = /** @class */ (function () {
    //constructor-> function
    //defining default values for properties 
    function student(_id, _name, _department) {
        this.id = _id;
        this.name = _name;
        this.department = _department;
    }
    //methods === JS function 
    student.prototype.printDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Department: ").concat(this.department);
    };
    return student;
}());
// creating a new instance of class Student 
var student2 = new student(5, 'Jonathan Cubbage', 'Trades');
var student3 = new student(6, 'Monica Rivera', 'Logistics');
console.log(student2.printDetails());
console.log(student3.printDetails());
// Class inheritance 
var Undergrad = /** @class */ (function (_super) {
    __extends(Undergrad, _super);
    function Undergrad(_id, _name, _department, _country) {
        var _this = _super.call(this, _id, _name, _department) || this; //calling the parent class constructor
        _this.country = _country;
        return _this;
    }
    Undergrad.prototype.printDetails = function () {
        return _super.prototype.printDetails.call(this) + ", Country: ".concat(this.country);
    };
    return Undergrad;
}(student));
var student4 = new Undergrad(7, 'Eric Marshall', 'Business', 'Canada');
console.log(student4.printDetails());
// Class inheritance 
var UPostgrad = /** @class */ (function (_super) {
    __extends(UPostgrad, _super);
    function UPostgrad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UPostgrad;
}(student));

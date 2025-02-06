// Array of Objects
let employees = [
    { name: "Sarah Pipper", department: 'CS', salary: 50000 },
    { name: "Jonathan Cubbage", department: 'Music', salary: 75000 },
    { name: "Monica Rivera", department: 'Economics', salary: 45000 },
];

let totalSalary = 0;
for (const employee of employees) {
    totalSalary += employee.salary; // Corrected property access
}

console.log(totalSalary); // Outputs: 170000

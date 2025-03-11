const express = require('express'); //import express package
const app = express();

app.use(express.urlencoded({ extended: false })); //middleware

//Student Data
const students = [
    { id: 1, name: 'John Wick', department: 'Mathematics' },
    { id: 2, name: 'Jenifer Lopez', department: 'Mathematics' },
    { id: 3, name: 'Ben Ken', department: 'Statistics' },
];

//Get all students
app.get('/students', function (req, res) {

    let student_data = [...students];
//fi
if (req.query.department) {
    student_data = student_data.filter((student_item) => {
        return student_item.department === req.query.department;
    });
}

    res.status(200).send(student_data);
});


//Get a single student
app.get('/students/:student_id', function (req, res) {   //":student_id = param"
    const student_id = parseInt(req.params.student_id); //parseInt = convert string to number

    //Find student in array
    const student = students.find((student_item) => {
        return student_item.id === student_id;
    });

    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send('Student not found');
    }
});

//Create a new student
app.post('/students', function (req, res) {
    const student = req.body;
    student.id = parseInt(student.id);
    students.push(student); //adding a new item into the above students array
    res.status(201).send(student);
});


//Update a student 
app.put('/students/:student_id', function (req, res) {
    const student_id = parseInt(req.params.student_id); //parseInt = convert string to number
    //Get array index of student
    const index = students.findIndex((student_item) => {
        return student_item.id === student_id;
    });

    if (index >= 0) {
        const student = req.body;
        student.id = parseInt(student.id);

        //update the student data
        students[index] = student;

        res.status(200).send(student);
    } else {
        res.status(404).send('unknown student');
    }

});

//Update only department of a student
app.patch('/students/:student_id', function (req, res) {
    const student_id = parseInt(req.params.student_id); //parseInt = convert string to number
    //Get array index of student
    const index = students.findIndex((student_item) => {
        return student_item.id === student_id;
    });

    if (index >= 0) {
      const student = students[index]; //Get student data from students array

        //update the student department
        students[index].department = req.body.department;

        res.status(200).send(student);
    } else {
        res.status(404).send('unknown student');
    }

});

//Delete a student 
app.delete('/students/:student_id', function (req, res) {
    const student_id = parseInt(req.params.student_id); //parseInt = convert string to number
    //Get array index of student
    const index = students.findIndex((student_item) => {
        return student_item.id === student_id;
    });

    if (index >= 0) {
        const student = students[index];
     //Delete student from student array
     students.splice(index, 1);

        res.status(200).send(student);
    } else {
        res.status(404).send('unknown student');
    }

});


//Webserver
app.listen(3000, function () {
    console.log('Server is running on port 3000...')
});

/*/HTTP Status
 Success:200
 Created Successfully: 201
 Validation Error: 400
 Authentication Error: 401
 Data Missing: 404
 Internal Server Error: 500 /*/
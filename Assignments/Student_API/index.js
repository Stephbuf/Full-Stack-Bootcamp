const express = require('express'); //import express package
const app = express();
const db_config = require('./db_config');
const Student = require('./models/student');

let post = 0;
let get = 0;
let put = 0;
let deletes = 0;

function HTTP_counter(req, res, next) {
    const method = req.method;
    if (method == "POST") {
        post++
        console.log('POST ', post)
    }
    else if (method == "GET") {
        get++
        console.log("GET ", get)
    }
    else if (method == "PUT" || method == "PATCH") {
        put++
        console.log("PUT ", put) 
    }
    else if (method == "DELETE") {
        deletes++
        console.log("DELETE ", deletes)
    }
    next();
}

app.use(express.urlencoded({ extended: false })); //middleware

db_config.authenticate().then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.log('An error happened with your DB connection. ' + err);
});

// Get all students

app.get('/students', HTTP_counter, function (req, res) {
    const { department } = req.query; //Find department 
    if (department) {
        Student.findAll({
            where: {
                department: department,
            }
        }).then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
    }
    else {

        Student.findAll()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
});

// Get a single student
app.get('/students/:student_id', HTTP_counter, function (req, res) {
    const student_id = parseInt(req.params.student_id);

    Student.findByPk(student_id).then((result) => {
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Student not found');
        }

    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Create a student
app.post('/students', HTTP_counter, function (req, res) {
    Student.create(req.body).then((result) => {
        res.status(201).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Update a databse
app.patch('/students/:student_id', HTTP_counter, function (req, res) {
    const student_id = parseInt(req.params.student_id);

    Student.findByPk(student_id).then((result) => {
        if (result) {
            // Update the DB result with the data sent from the client
            Object.assign(result, req.body);

            // Save to DB
            result.save().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });

        } else {
            res.status(404).send('Student not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});


// Delete a student 

app.delete('/students/:student_id', HTTP_counter, function (req, res) {
    const student_id = parseInt(req.params.student_id);

    Student.findByPk(student_id).then((result) => {
        if (result) {
            // Delete from DB
            result.destroy().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });

        } else {
            res.status(404).send('Student not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(3000, function () {
    console.log('Server running on port 3000...');
});
const express = require('express');
const arithmetic = require('./arithmeticFunctions');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/calculate', (req, res) => {
    let { operation, value_1, value_2 } = req.body;

    // Convert values to numbers
    value_1 = parseFloat(value_1);
    value_2 = parseFloat(value_2);


    // Perform calculation
    const result = arithmetic[operation](value_1, value_2);

    res.json({ operation, value_1, value_2, result });
});

app.listen(3000, () => console.log("Server running on port 3000"));

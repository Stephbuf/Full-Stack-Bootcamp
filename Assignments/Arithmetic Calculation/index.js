// Import modules
const express = require('express');
const arithmetic = require('./arithmeticFunctions');

// Initialize Express
const app = express();
app.use(express.json()); // Enable JSON 

// POST route to handle arithmetic operations
app.post('/calculate', (req, res) => {
    const { operation, value_1, value_2 } = req.body;

    // Validate input
    if (!['add', 'sub', 'multiply', 'divide'].includes(operation) || 
        typeof value_1 !== 'number' || 
        typeof value_2 !== 'number') {
        return res.status(400).json({ error: "Invalid input. Use 'add', 'sub', 'multiply', 'divide' and provide numbers." });
    }

    // Perform the calculation
    const result = arithmetic[operation](value_1, value_2);

    // Print and send the response
    console.log(`Operation: ${operation} | Value 1: ${value_1} | Value 2: ${value_2} | Result: ${result}`);
    res.json({ operation, value_1, value_2, result });
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));

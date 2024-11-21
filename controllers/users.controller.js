const path = require("path");
const { users } = require("../models/users.model");

// Serve the index.html page with the list of users
exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
}

// Handle saving user data to the array
exports.saveUser = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);

    const user = { name, age };
    users.push(user);  // Add the user to the array

    // Send back the updated user list as JSON
    res.status(200).json({
        success: true,
        users
    });
}

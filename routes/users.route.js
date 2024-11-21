const express = require('express');
const { getUsers, saveUser } = require('../controllers/users.controller');
const router = express.Router();

// POST route for saving a user
router.post("/users", saveUser);  

// GET route for getting the list of users and rendering the page
router.get("/users", getUsers);  

module.exports = router;

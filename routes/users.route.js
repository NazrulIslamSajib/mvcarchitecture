const express = require('express');
const router = express.Router();
const { getUsers, saveUser } = require('../controllers/users.controller');

// POST route for saving a user
router.post("/users", saveUser);  

// GET route for getting the list of users and rendering the page
router.get("/users", getUsers);  

module.exports = router;

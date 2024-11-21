const express = require('express'); 
////i changes path of code in index.js 
/// HI are you here 
const app = express(); 
const PORT = 4000;    
const userRoute = require("./routes/users.route.js");

// Middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use the user routes
app.use(userRoute);
// 404 error handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Router doesn't exist",
    });
});

app.listen(PORT, () => {
    console.log(`Your server is running at http://localhost:${PORT}`); 
});

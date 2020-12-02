const express = require("express");

//Initialise the application and set up a port for it to run

const app = express();
const PORT = process.env.PORT || 3000; 


// Start the server
app.listen(PORT, () => console.log("application running on port " + PORT));
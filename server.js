const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

//Initialise the application and set up a port for it to run

const app = express();
const PORT = process.env.PORT || 3000; 

app.use("/", htmlRoutes)
app.use("/", apiRoutes)

// Start the server
app.listen(PORT, () => console.log("application running on port " + PORT));
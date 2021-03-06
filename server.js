const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

//Initialise the application and set up a port for it to run

const app = express();
const PORT = process.env.PORT || 3000; 


app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

// Start the server
app.listen(PORT, () => console.log("application running on port " + PORT));
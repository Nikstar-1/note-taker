const path = require("path"); 
const router = require("express").Router();

//Set up all/ router to return index.html file and display to user
router.get("/", (req, res) => {
    const htmlFilePath = path.join(__dirname, "../public/index.html");
    res.sendFile(htmlFilePath)
})


//Set Up /notes router to return and display notes.html file to user



module.exports = router; 
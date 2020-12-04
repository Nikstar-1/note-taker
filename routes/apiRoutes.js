const router = require("express").Router();

//GET request response which returns all notes from the db.json file
router.get("api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
   //Will read from db.json and return the notes
    
})
//POST request which adds a new note to the db.json file
router.post("api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
   //add a note to db.json
    
})
//DELETE request which deletes the note from the db.json using an id
router.delete("api/notes/:id", (req, res) => {
    readFileAsync (path.join(__dirname, "./db/db.json"), "UTF-8")
    .then(function(data) {
        return res.json(JSON.parse(data));
    })
   //delete from db.json by identifying which note has a corresponding id from re.params
    
})

module.exports = router; 
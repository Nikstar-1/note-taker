const router = require("express").Router();
const Interactions = require("../db/databaseInteractions")


//GET request response which returns all notes from the db.json file
router.get("/notes", (req, res) => {
    Interactions.readNotes().then((dbNotes) => 
   res.json(dbNotes)).catch((error) => res.status(500).json(error))
   

});

//POST request which adds a new note to the db.json file
router.post("/notes", (req, res) => {
   Interactions.addNote(req.body).then((note) => res.json(note));
   
});



//DELETE request which deletes the note from the db.json using an id
router.delete("/api/notes/:id", (req, res) => {
    readFileAsync (path.join(__dirname, "./db/db.json"), "UTF-8")
    .then(function(data) {
        return res.json(JSON.parse(data));
    });
   //delete from db.json by identifying which note has a corresponding id from re.params
});
 

/*function readingTheDbFile() {
    return readFileAsynchrously(path.join(__dirname, “/db/db.json”), “utf8");
  }
*/

module.exports = router; 


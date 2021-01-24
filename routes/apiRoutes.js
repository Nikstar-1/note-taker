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
router.delete("/notes/:id", (req, res) => {
    var idOnNoteToDelete = req.params.id; 
    Interactions.deleteNote(idOnNoteToDelete).then (() => res.json({success: true}));
});

module.exports = router; 
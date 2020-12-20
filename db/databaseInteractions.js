const util = require("util")
const fs = require("fs")
const { v4: uuidv4 } = require('uuid')

const asyncRead = util.promisify(fs.readFile)
const asyncWrite = util.promisify(fs.writeFile)

class DatabaseInteractions {
    readDatabase() {
        return asyncRead("db/db.json");
    }

    writeToDatabase(noteToBeAdded) {
        return asyncWrite("db/db.json", JSON.stringify(noteToBeAdded))
    }

   readNotes(){
    return this.readDatabase().then((dbNotes) => {
        let notesArray = [];
        let parsedJson = notesArray.concat(JSON.parse(dbNotes));
        return parsedJson; 
    })
   }

   addNote(note){
    //deconstructing the note to that we can add a unique id to that notes object before adding to the db
    const {title, text} = note; 
    const noteToBeAdded = {title, text, id: uuidv4()}; 
    // getting all notes from the database, separating them into an array with the new note to be added and then writeing this new array to the database
    return this.readNotes().then((notesInDb) => [...notesInDb, noteToBeAdded]).then((updatedNotes) => this.writeToDatabase(updatedNotes)).then(() => noteToBeAdded)
   }

   deleteNote(idOnNoteToDelete){
    //getting the notes from the db and filtering to remove the note with the id passed in from the params on the request to the server then rewriting to the db
    return this.readNotes().then((notesInDb) => notesInDb.filter((notes) => notes.id !== idOnNoteToDelete)).then((updatedNotes) => this.writeToDatabase(updatedNotes));
   }
}

module.exports = new DatabaseInteractions();
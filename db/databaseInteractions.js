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

        const {title, text} = note; 
        const noteToBeAdded = {title, text, id: uuidv4()}; 
          
        return this.readNotes().then((notesInDb) => [...notesInDb, noteToBeAdded]).then((updatedNotes) => this.writeToDatabase(updatedNotes)).then(() => noteToBeAdded)
   }
}

module.exports = new DatabaseInteractions();
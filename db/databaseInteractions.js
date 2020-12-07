const util = require("util")
const fs = require("fs")

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
       const  parsedJson = JSON.parse(dbNotes);
        return [...parsedJson]; 
    })
   }

   addNote(note){
       //add the note to the db
       return asyncWrite("db/db.json", JSON.stringify(addNote))
   }

}


module.exports = new DatabaseInteractions();


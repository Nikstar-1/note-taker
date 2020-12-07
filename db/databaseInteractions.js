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
       return asyncWrite("db/db.json", JSON.stringify(note))
       
   }


}
const newNote = (title, body) => {

    let notes= []; //Declare an array
    const note = JSON.parse(fs.readFileSync("db/db.json", 'utf8')); //read and parse file contents
    notes.push(note); //Append new JSON to your array
}

module.exports = new DatabaseInteractions();


const util = require("util")
const fs = require("fs")

const asyncRead = util.promisify(fs.readFile)


class DatabaseInteractions {
    readDatabase() {
        return asyncRead("db/db.json");
    }
   readNotes(){
    return this.readDatabase().then((dbNotes) => {
       const  parsedJson = JSON.parse(dbNotes);
        return [...parsedJson]; 
    })

   }



}


module.exports = new DatabaseInteractions();


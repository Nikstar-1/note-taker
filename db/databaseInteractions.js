const util = require("util")
const fs = require("fs")

class DatabaseInteractions {
   readNotes(){
       const asyncRead = util.promisify(fs.readFile)
       const readDatabase = asyncRead("db/db.json");
       console.log(readDatabase)
       const formatNotes = [].concat(JSON.parse(readDatabase));
       return formatNotes;

   }



}


module.exports = new DatabaseInteractions()


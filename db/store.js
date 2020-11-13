const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// class Store 
    function read() {
        return readFileAsync("db/db.json", (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }
    function write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    function getNotes() {
        return this.read().then((data) => {
            JSON.parse(data);
        });
    }

    function addNote(note) {
        const { title, text } = note;

        // if (!title || !text) {
        //     return alert("Please include both title and text information.")
        // }
        const userId = uuidv4();
        //adds id to new note object
        const newNote = { title, text, id: userId };
        //get notes, add to notes, update notes
        return this.getNotes().then((data) => {
            notes.push(newNote);
            getNotes(data);
            console.log(data)
        });
            // .then(getNotes())
            // .then(write());
    }
    // deleteNote



// }
module.exports = {
    read,
    write,
    getNotes,
    addNote
};

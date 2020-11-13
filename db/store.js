const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {
    read() {
        return readFileAsync("db/db.json", (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            JSON.parse(notes);
            res.json(notes);
        });
    }

    addNote(note) {
        const { title, text } = note;

        // if (!title || !text) {
        //     return alert("Please include both title and text information.")
        // }
        const userId = uuidv4();
        //adds id to new note object
        const newNote = { title, text, id: userId };
        //get notes, add to notes, update notes
        return this.getNotes().then((notes) => {
            notes.push(newNote);
            getNotes();
            console.log(notes)
        });
            // .then(getNotes())
            // .then(write());
    }
    // deleteNote



}
module.exports = new Store;

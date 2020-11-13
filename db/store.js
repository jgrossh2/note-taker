const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const { notes } = require('./db');


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
        return this.read().then((data) => {
            JSON.parse(data);
        });
    }

    addNote(note) {
        const { title, text } = note;

        const userId = uuidv4();
        //adds id to new note object
        const newNote = { title, text, id: userId };
        //get notes, add to notes, update notes
        return this.getNotes()
            .then((data) => {
            notes.push(newNote);
            
            console.log(notes)
        });
    }

}

module.exports = new Store;

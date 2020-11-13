const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class Store {
    read() {
        return fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }
    write(note) {
        return fs.writeFile("db/db.json", JSON.stringify(note));
    }
    getNotes(notes) {
        return this.read().then(notes)
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
        return this.getNotes()
            .then(notes.push(newNote))
            .then(getNotes())
            .then(write());
    }
    // deleteNote



}
module.exports = new Store;

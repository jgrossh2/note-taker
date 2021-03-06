const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {
    read() {
        return readFileAsync("db/db.json", "utf8")
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
        //adds id to new note
        const newNote = { title, text, id: userId };
        //get notes, add to notes, update notes
        this.read()
            .then((data) => {
            let dataArray = JSON.parse(data)
            dataArray.push(newNote);
            this.write(dataArray);
            return newNote
        });
    }
}

module.exports = new Store;

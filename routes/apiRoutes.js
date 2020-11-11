const FileSaver = require('file-saver');
const path = require('path');
const { report } = require('./htmlRoutes');
const router = require('express').Router();
const { notes } = require('../db/db');

router.get('api/notes', (req, res) => {
    //taking notes array and setting as note
    const note = notes;
    res.json(note)
});
router.post('api/notes', (req, res) => {
    const newNote = req.body;
    //create an array to push newNote to from db.json file
    note.push(newNote);
    //return new note to client
    res.json(newNote);
    // FileSaver.saveAs(newNote, note text)
    //creates id per note
    const userId = uuidv(4)
    //saving record to the database 
    //with attaching userid to each record
    repo.create({
        userId,
        title, 
        text
    })
    res.send('Note submitted!')
})

module.exports = router;
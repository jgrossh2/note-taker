const { truncateSync } = require('fs');
const path = require('path');
// const { report } = require('./htmlRoutes');
const router = require('express').Router();
const { notes } = require('../../db/db');
const {v4 : uuidv4} = require('uuid') 
// const { saveNote } = require('../../public/assets/js/index');

router.get('/notes', (req, res) => {
    //taking notes array and setting as note
    res.json(note)
});
router.post('/notes', (req, res) => {
    //needing req.body.id
    // const newNote = saveNote(req.body, notes)
    const newNote = req.body;
    console.log(newNote)
    //create an array to push newNote to from db.json file
    notes.push(newNote);
    //return new note to client
    res.json(newNote);
    //creates id per note
    const userId = uuidv4()
    // //saving record to the database 
    // //with attaching userid to each record
    const keepNote = newNote.userId 
    notes.push(keepNote);
    // res.json(notes)
    // res.send("New task");
    console.log(userId)
})

module.exports = router;
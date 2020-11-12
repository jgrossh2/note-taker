const FileSaver = require('file-saver');
const path = require('path');
// const { report } = require('./htmlRoutes');
const router = require('express').Router();
const { notes } = require('../../db/db');
const { saveNote } = require('../../public/assets/js/index');

router.get('/notes', (req, res) => {
    //taking notes array and setting as note
    res.json(note)
});
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = saveNote(req.body, notes)
    // const newNote = req.body;
    // console.log(newNote)
    //create an array to push newNote to from db.json file
    // notes.push(newNote);
    //return new note to client
    // res.json(newNote);
    // FileSaver.saveAs(newNote, note text)
    //creates id per note
    // const userId = uuid4();
    // //saving record to the database 
    // //with attaching userid to each record
    // repo.create({
    //     userId,
    //     title, 
    //     text
    // })
    res.json(newNote)
})

module.exports = router;
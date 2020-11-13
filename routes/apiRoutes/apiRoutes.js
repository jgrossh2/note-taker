const router = require('express').Router();
const { notes } = require('../../db/db');
const { read, write, getNotes, addNote } = require('../../db/store');

router.get('/notes', (req, res) => {
    
        getNotes(notes)
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => {
            res.json("error");
        });
    //taking notes array and setting as note 
});
router.post('/notes', (req, res) => {  
        addNote(req.body)
        .then((notes) => res.json(notes));
    // req.body.id= notes.length.toString();
    
    // const newNote = saveNote(req.body, notes)
    // const newNote = req.body;
    // console.log(newNote)
    // //create an array to push newNote to from db.json file
    // notes.push(newNote);
    // //return new note to client
    // res.json(newNote);
    // //creates id per note
    // const userId = uuidv4()
    // // //saving record to the database 
    // // //with attaching userid to each record
    // const keepNote = newNote.userId 
    // notes.push(keepNote);
    // // res.json(notes)
    // // res.send("New task");
    // console.log(userId)
});

module.exports = router;
const router = require('express').Router();
const { notes } = require('../../db/db');
const Store = require('../../db/store');

router.get('/notes', (req, res) => {
    // Store
        // .getNotes()
        const result = notes;
        return res.json(result);
        // .catch((err) => {
        //     res.json("error");
        // });
    //taking notes array and setting as note 
});
router.post('/notes', (req, res) => {  
    Store
        .addNote(req.body)
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
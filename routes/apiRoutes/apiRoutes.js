const router = require('express').Router();
// const { notes } = require('../../db/db');
const { write } = require('../../db/store');
const Store = require('../../db/store');

router.get('/notes', async (req, res) => {
    var data = await Store.read()
        // const result = notes;
        var newData = JSON.parse(data)
        res.json(newData);
});
router.post('/notes', (req, res) => {  
    let newNote = Store.addNote(req.body)
        //post notes to json array
        
        res.json(newNote);
});
router.delete('/notes/:id', async(req, res) => {
    
        // read page
        var data = await Store.read()
        console.log("data", data)
        // let notes = data.notes;
        // console.log("notes", notes)
        const id = req.params.id;
        //parse data into array
        let dataArray = JSON.parse(data);
        // filter data in order to find if id of note matches, only keeps ids that do not match
        //filter creates new array
        let filterData = dataArray.filter(note => note.id !== id);
        //write file to update with filteredData
        Store.write(filterData);
        //return 
        res.json("Done!")
            
});
module.exports = router;



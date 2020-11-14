const router = require('express').Router();
const { notes } = require('../../db/db');
const { write } = require('../../db/store');
const Store = require('../../db/store');

router.get('/notes', (req, res) => {
    //setting array as var
        const result = notes;
        return res.json(result);
});
router.post('/notes', (req, res) => {  
    Store
        .addNote(req.body)
        //post notes to json array
        .then((notes) => res.json(notes));
});
router.delete('/notes/:id', (req, res) => {
    
        // read page
        var data = Store.read(data)
        console.log("data", data)
        const id = req.params.id
        //parse data into array
        let dataArray = JSON.parse(data);
        // filter data in order to find if id of note matches, only keeps ids that do not match
        //filter creates new array
        let filterData = dataArray.filter(note => note.id !== id);
        //write file to update with filteredData
        write(filterData);
        //return 
        res.json("Done!")
        
            
});
module.exports = router;



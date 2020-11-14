const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
//connect css and js files-middleware function
app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


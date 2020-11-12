const router = require('express').Router();
//.js implied with using file names for require
const apiRoutes = require('../apiRoutes/apiRoutes');
const htmlRoutes = require('../htmlRoutes/htmlRoutes');

router.use(apiRoutes);
router.use(htmlRoutes);

module.exports = router;
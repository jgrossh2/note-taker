const router = require('express').Router();
//.js implied with using file names for require
const apiRoutes = require('../apiRoutes');
const htmlRoutes = require('../htmlRoutes');

router.use(apiRoutes);
router.use(htmlRoutes);

module.exports = router;
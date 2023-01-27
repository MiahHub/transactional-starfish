const router = require('express').Router();
const e = require('express');
const apiRoutes = require('api');


router.use('/api', apiRoutes);


module.exports = router;
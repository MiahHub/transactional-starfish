const router = require('express').Router();
const employees = require('../models/employee');

router.use('/employees', employees);

module.exports = router;
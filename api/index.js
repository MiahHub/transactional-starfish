const router = require('express').Router();
const apiRoutes = require('./api');
const departmentRoute = require('./department');
const employeeRoute = require('./employee');
const roleRoute = require('./role');

router.use('/api', apiRoutes);
router.use('/departmentRoute', departmentRoute);
router.use('/employeeRoute', employeeRoute);
router.use('/roleRoute', roleRoute);

module.exports = router;
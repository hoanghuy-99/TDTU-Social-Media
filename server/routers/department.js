const router = require('express').Router()
const departmentCtrl = require('../controllers/department')

router.get('/departments', departmentCtrl.getManyDepartments)

module.exports = router
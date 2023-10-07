const {Router} = require('express');
const StudentController = require('../controllers/student.controller')
const router = Router()

router.get('/getAll', StudentController.getAll);
router.get('/getOne/:cn', StudentController.getOne);
router.post('/insertOne', StudentController.insertOne);

module.exports = router;
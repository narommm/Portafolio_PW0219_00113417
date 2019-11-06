/*
Get

*/

var express = require('express')
var router = express.Router();
const RegisterController = require('../Controller/RegisterController')

router.get('/',RegisterController.getAll)
router.get('/:id',RegisterController.getAll)

router.post('/insert',RegisterController.insert)
router.put('/update',RegisterController.update)
router.delete('/delete',RegisterController.deleteById)

module.exports = router;
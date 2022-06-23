const express = require('express')
const router = express.Router()
const { newContact } = require('../controllers/contactController')

router.route('/newcontact').post(newContact);


module.exports = router;
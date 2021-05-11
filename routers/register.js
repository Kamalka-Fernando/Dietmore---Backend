const express = require('express');
const { registerUser, getUser } = require('../controllers/register');
const router = express.Router()

router.post('/', registerUser);
router.get('/', getUser);
module.exports = router;
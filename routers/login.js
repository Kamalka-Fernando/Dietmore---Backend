const express = require('express');
const { getUser, getUserById, postUser, updateUser,  deleteUser } = require('../controllers/login');
const router = express.Router()


router.get('/', getUser);

router.get('/:id', getUserById);

router.post('/', postUser);

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)


module.exports = router;
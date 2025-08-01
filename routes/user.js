const express = require('express');
const router = express.Router();

const {
    handleAllGetUser,
    handleSingleGetUser,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
} = require('../controllers/user');

router.get('/', handleAllGetUser);

router.get('/:id', handleSingleGetUser);

router.post('/', handleCreateUser);

router.put('/:id', handleUpdateUser);

router.delete('/:id', handleDeleteUser);

module.exports = router;

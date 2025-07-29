const express = require('express');
const {
    handleAllGetUser,
    handleSingleGetUser,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
} = require('../controllers/user');
const router = express.Router();

router.get('/', handleAllGetUser);

router.get('/:id', handleSingleGetUser);

router.post('/', handleCreateUser);

router.put('/:id', handleUpdateUser);

router.delete('/:id', handleDeleteUser);

module.exports = router;

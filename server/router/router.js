const express = require('express');
const router = express.Router()
const {userAdd,userList,userUpdate,deleteUser} = require('../controller/userController');


router.post('/add',userAdd);
router.get('/list',userList);
router.put('/:id',userUpdate);
router.delete('/:id',deleteUser);


module.exports = router
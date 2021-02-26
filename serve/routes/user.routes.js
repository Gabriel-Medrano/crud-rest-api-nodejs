const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/users.controller');

// routes User
router.get('/',userCtrl.getUsers);
router.post('/',userCtrl.createUser);
router.get('/:id',userCtrl.getUser);
router.put('/:id',userCtrl.updateUser);
router.delete('/:id',userCtrl.removeUser);

// routes Employee

// routes Admind

// export
module.exports  = router;
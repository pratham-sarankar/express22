const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController')

/* GET users listing. */
router.get('/', async function (req,res) {
  return await controller.insertOne();
});

module.exports = router;

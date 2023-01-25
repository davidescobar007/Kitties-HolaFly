const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getCatList(res);
});

router.get('/:catId', (req, res) => {
  controller.getCat(req, res);
});

module.exports = router;

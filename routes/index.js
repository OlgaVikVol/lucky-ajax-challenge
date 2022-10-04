const express = require('express');

const router = express.Router();
const Die = require('../db/models/die');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post('/rolls', (req, res) => {
  const die = new Die(Number(req.body.sides));
  res.render('index', { die, roll: die.roll() });
});

module.exports = router;

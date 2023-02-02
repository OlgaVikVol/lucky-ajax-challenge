const express = require("express");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

const Home = require("../views/Home");

const router = express.Router();
const Die = require("../db/models/die");
const {
  default: regenerator,
} = require("@babel/preset-env/lib/polyfills/regenerator");

/* GET home page. */
router.get("/", (req, res) => {
  const home = React.createElement(Home, req.app.locals);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write("<!DOCTYPE html>");
  res.end(html);
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post("/", async (req, res) => {
  const number = req.body.value;

  const die = new Die(Number(number));
  res.json({ die, roll: die.roll() });
});

module.exports = router;

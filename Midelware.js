const { response } = require("express");

var day = new Date();
var numberOfDate = day.getDay();
let time = day.getHours();

const midelware = (req, res, next) => {
  if (numberOfDate <= 5 && time >= 8 && time < 18) {
    next();
  } else {
    console.log("we are not working");
    res.status(400).json({ msg: "we are not working" });
  }
};
module.exports = midelware;

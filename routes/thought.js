const express = require('express');
const Thought = require('../models/though');
const User = require('../models/user');
const Router = express.Router();

Router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.send(thoughts);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong, Please try again later');
  }
});

Router.post('/', async (req, res) => {
  try {
    const { thoughText, username } = req.body;
    const thought = new Thought({
      thoughText,
      username,
    });
    await thought.save();

    const foundUser = await User.findOne({ username });
    foundUser.thoughts = [...foundUser.thoughts, thought];
    await foundUser.save();
    res.status(201).send(thought);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong, Please try again later');
  }
});

module.exports = Router;

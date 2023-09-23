const { response } = require("express");
const Entry = require("../models/entries");

const createEntry = async (req, res = response) => {
  try {
    const entry = new Entry(req.body);

    entry.save();

    res.status(201).json({
      ok: true,
      message: "Create entry",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error, please contact the administrator",
    });
  }
};

const getEntries = (req, res = response) => {
  res.json({
    ok: true,
    message: "Hello World",
  });
};

module.exports = {
  getEntries,
  createEntry,
};

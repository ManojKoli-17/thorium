const express = require("express");

const router = express.Router();

let persons = [
  {
    name: "manoj",
    age: 22,
    votingStatus: false,
  },
  {
    name: "rushikesh",
    age: 20,
    votingStatus: false,
  },
  {
    name: "prashant",
    age: 70,
    votingStatus: false,
  },
  {
    name: "swapnil",
    age: 5,
    votingStatus: false,
  },
  {
    name: "vishal",
    age: 40,
    votingStatus: false,
  },
];
router.post("/voting", function (req, res) {
  input = req.query.input;
  let isAgeAbove = false;
  let finalVotingPersons = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > input) {
      finalVotingPersons.push(persons[i]);
      persons[i].votingStatus = true;
      isAgeAbove = true;
    }
  }
  if (!isAgeAbove) res.send("Person is not found above this age");
  
  else res.send({ result: finalVotingPersons });
});

module.exports = router;

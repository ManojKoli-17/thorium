const express = require("express");
const router = express.Router();

let players = [];

router.post("/players", function (req, res) {
  let player = req.body;
  let playerName = player.name;
  for (let i = 0; i < players.length; i++) {
    if (players[i].name == playerName) {
      res.send("Player already exists");
    }
  }
  players.push(player);
  res.send(players);
});

router.post('/players/:playerName/bookings/:bookingid',function(req,res){
  let playerName = req.params.playerName;
  let bookingId = req.params.bookingid;
  let booking = req.body;
  let book_No = req.body.bookingNumber;
  for(let i=0;i<players.length;i++){
      if(playerName==players[i].name){
          console.log(playerName==players[i].name)
           let a=  players[i].bookings.find(ele=>ele.bookingNumber==bookingId)
           let b=  players[i].bookings.find(ele=>ele.bookingNumber==book_No)
           if ( a||b ){
              return res.send("Booking id already exists")
           }
              players[i].bookings.push(booking)
              return res.send(players)
          }
   }
  return res.send("Player does not exist")
})
module.exports = router;

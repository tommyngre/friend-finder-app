// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

let friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  })

  app.post("/api/friends", function (req, res) {
    let user = req.body;

    let match; //user's match
    let matchDiff = 1000;//score diff used to determine match

    friends.forEach(friend => {
      let totalDiff = 0;

      for (let i = 0; i < user.scores.length; i++) {
        let diff = Number(friend.scores[i]) - user.scores[i];
        
        if (diff < 0) {
          diff = diff * -1;
        };

        totalDiff += diff;
      }

      if (totalDiff < matchDiff) {
        matchDiff = totalDiff;
        match = friend;
      }

    });

    //console.log(match.name);

    friends.push(user);
    res.json(match);
  })

};

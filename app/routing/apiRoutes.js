let friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  })

  app.post("/api/friends", function (req, res) {
    let user = req.body;
    console.log(user);

    let match; //user's match
    let matchDiff = 1000;//score diff used to determine match

    //make a copy of friends w/o the user. filter by name
    let friendsExcludeUser = [];
    friends.forEach(friend => {
      if (friend.name != user.name) {
        friendsExcludeUser.push(friend);
      }
    });

    friendsExcludeUser.forEach(friend => {
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

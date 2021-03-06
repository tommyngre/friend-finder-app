let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
app.use(express.static(path.join(__dirname,'/app/public')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let PORT = process.env.PORT || 3000;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

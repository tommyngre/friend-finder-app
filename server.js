let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let PORT = process.env.PORT || 3000;

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

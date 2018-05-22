# friend-finder-app
"The Ultimate Match Survey" represents a framework for a match-making application. Here's what happens:
* A new user answers a 10-question survey
* The app finds an existing user whose answers most closely resemble the new user's
* The app prompts the new user to contact their match

## implementation
The app is hosted on heroku [here](https://powerful-brushlands-13053.herokuapp.com/). The back-end implementation consists of node and express. The front-end consists of jQuery and a minimalist implementation of materialize.css.

## the matching algorithm
Answers to questions have numeric scores. When a new user submits a survey, here's what happens:
* Each answer is compared to the respective answer provided by each existing user in the database (just a json array for now, not an acual proper db)
* The difference between the new user's scores and each existing user's score is summed
* The existing user with the "lowest total difference" between scores represents the new user's match

## error handling
* All fields are required. If a user does not fill out profile information, or does not answer a question, then an alert will instruct the user to complete the form
* The only supported routes are `"/"` and `"/survey"`. If a user navigates to any other route, they will be served the `home.html` content (equivalent to `"/"`)

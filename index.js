/* Requirements */
const express = require("express");

/* Create Express Application */
const app = express();

/* Tell application to use URL encoded forms */
app.use( express.urlencoded( {extended: true} ) );

app.get("/", require("./src/serveRegistrationPage"));
app.get("/style.css", require("./src/serveStyle"));
app.post("/receive-registration", require("./src/processUserRegistration"));



app.listen(9999);


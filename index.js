require("dotenv").config();

const express = require("express");
const app = express();

app.use( express.urlencoded( {extended: true} ) );


/* "Web" Routes / "Pages" */
app.get("/", require("./src/serveRegistrationPage"));
app.get("/cards", require("./src/serveCardsPage"));
app.get("/style.css", require("./src/serveStyle"));
app.post("/receive-registration", require("./src/processUserRegistration"));


/* "API" Routes */
app.get("/api/cards", require("./src/getAllCards"));

app.listen(9999);
console.log("VernacuLearn in listening for HTTP on port 9999.");


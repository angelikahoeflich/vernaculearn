require("dotenv").config();

const express = require("express");
const session = require("express-session");
const app = express();

app.use( express.urlencoded( {extended: true} ) );


app.set("trust proxy", 1);
app.use( session(require("./lib/sessionOptions")) );


/* "Web" Routes / "Pages" */
app.get("/", require("./src/serveRegistrationPage"));
app.get("/signin", require("./src/serveSignInPage"));
app.get("/reg-success", require ("./src/serveSuccessPage"));
app.get("/cards", require("./src/serveCardsPage"));
app.get("/style.css", require("./src/serveStyle"));
app.get("/interests", require("./src/serveInterestsPage"));
app.post("/receive-registration", require("./src/processUserRegistration"));
app.post("/receive-signin", require("./src/processSignIn"));


/* "API" Routes */
app.get("/api/cards/:id", require("./src/getCardById"));
app.get("/api/cards", require("./src/getAllCards"));
app.get("/api/interests/:id", require("./src/getInterestById"));
app.get("/api/interests", require("./src/getAllInterests"));

app.listen(9999);
console.log("VernacuLearn is listening for HTTP on port 9999.");


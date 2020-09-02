const express = require("express");
const path = require("path");


const app = express();
const urlEncodedForms = express.urlencoded({extended: true});

app.use(urlEncodedForms);

app.get("/", serveRegistrationPage);
app.post("/receive-registration", processUserRegistration);

app.listen(9999);


/* Functions */

function processUserRegistration (request, response) {
    console.log("testing:", request.body);

    response.send("Yeah yeah, received your form!");
}

function serveRegistrationPage (request, response) {
    response.sendFile( path.resolve("registration.html") );
}

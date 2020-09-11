const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "supercool",
  database: "vernaculearn"
});


const app = express();
const urlEncodedForms = express.urlencoded({extended: true});

app.use(urlEncodedForms);

app.get("/", serveRegistrationPage);

app.get("/style.css", function(req,res){
  res.sendFile( path.resolve("./docs/style.css") );
});

app.post("/receive-registration", processUserRegistration);

app.listen(9999);


/* Functions */

function processUserRegistration (request, response) {
    console.log("testing:", request.body);

    dbConnection.query(

      "INSERT INTO users (first_name, last_name, email, password, email_verified) VALUES (?,?,?,?,?);",

      [request.body.firstName, request.body.lastName, request.body.emailAddress, request.body.password, 0],

      function(err, results, fields) {
        if (err) console.log(err);
        console.log("results:", results)
      }

    );


    response.send("Yeah yeah, received your form!");
}

function serveRegistrationPage (request, response) {
    response.sendFile( path.resolve("./docs/index.html") );
}

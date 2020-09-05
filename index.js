/* Requirements, Dependencies */
const express = require("express");
const mysql = require("mysql2");
const path = require("path");

/* Make a new connection to database */
const database = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "supercool",
	database: "vernaculearn"
});


/* Create new Express Application */
const app = express();



/* Tell the app to use URL Encoded Forms */
app.use( express.urlencoded({extended: true}) );

/* Routes */
app.get("/", serveRegistrationPage);
app.get("/style.css", serveTheStylesheet);
app.post("/receive-registration", processUserRegistration);



/* Listen for Traffic */
app.listen(9999);




/* Functions */
function processUserRegistration (request, response) {
    console.log("testing:", request.body);

    if (request.body.password != request.body.verifyPassword) {
    	console.log("This user didn't type the same thing twice. lol.");
    }

    database.query(

    	"INSERT INTO users (username, password, email, first_name, last_name) VALUES (?,?,?,?,?)",

    	[
    	  request.body.emailAddress,
    	  request.body.password,
    	  request.body.emailAddress,
    	  request.body.firstName,
    	  request.body.lastName
    	],

    	function(err, results, fields) {

    	}


    );

    response.sendFile( path.resolve("docs/registered.html") );
}


function serveRegistrationPage (request, response) {
    response.sendFile( path.resolve("docs/index.html") );
}

function serveTheStylesheet (request, response) {
    response.sendFile( path.resolve("docs/style.css") );
}

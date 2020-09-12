const database = require("../lib/database");

module.exports = function (request, response) {
    console.log("testing:", request.body);

    database.query(

      "INSERT INTO users (first_name, last_name, email, password, email_verified) VALUES (?,?,?,?,?);",

      [
        request.body.firstName,
        request.body.lastName,
        request.body.emailAddress,
        request.body.password,
        0
      ],

      function(err, results, fields) {
        if (err) console.log(err);
        console.log("results:", results)
      }

    );


    response.send("Yeah yeah, received your form!");
}

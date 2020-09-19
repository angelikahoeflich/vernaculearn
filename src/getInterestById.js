const database = require("../lib/database");

module.exports = function(req, res) {

  database.query(

    "SELECT * FROM interests WHERE id=?;",

    [req.params.id],

    function(err, results, fields) {
      if (err) { console.log("err", err) };

      res.json(results)
    }

  );

}

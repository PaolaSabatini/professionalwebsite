var spicedPg = require("spiced-pg");

var dbUrl =
    process.env.DATABASE_URL ||
    "postgres://postgres:postgres:postgres@localhost:5432/paolasabatiniwebsite";

var db = spicedPg(dbUrl);

//-------------------------------------//

//  ADD CONTACT

exports.addContact = function addContact(name, email, tel, message) {
    let q = `INSERT INTO contact (name, email, tel, message) VALUES ($1, $2, $3, $4) RETURNING *;`;
    let params = [name, email, tel, message];
    return db.query(q, params);
};

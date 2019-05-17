const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const chalkAnimation = require("chalk-animation");
const csurf = require("csurf");

app.engine("handlebars", require("express-handlebars")());
app.set("view engine", "handlebars");

app.use(express.static("./public"));

const cookieSession = require("cookie-session");
app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60 * 24 * 14,
        secret: `I'm always hungry.`
    })
);

app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(csurf());

app.use(function(req, res, next) {
    res.setHeader("x-frame-options", "DENY");
    res.locals.csrfToken = req.csrfToken();
    next();
});

//----------------- NEW --------------------//

app.get("/", (req, res) => {
    res.render("new", {
        layout: "newlayout"
    });
});

app.post("/", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let tel = req.body.tel;
    let message = req.body.message;
    console.log(name, email, tel, message);
    db.addContact(name, email, tel, message)
        .then(results => {
            console.log("OK");
            res.render("thanks", {
                layout: "tks"
            });
        })
        .catch(err => {
            console.log("Error in addContact", err);
        });
});

//------------------THANKS-----------------------//

app.get("/thanks", (req, res) => {
    console.log("GET THANKS");
    res.render("thanks", {
        layout: "tks"
    });
});

//-----------------------------------------------//

if (require.main == module) {
    app.listen(process.env.PORT || 8080, () =>
        chalkAnimation.rainbow("L I S T E N I N G . . .")
    );
}

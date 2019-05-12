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

//----------------- MAIN PAGE ------------------//

app.get("/", (req, res) => {
    res.render("menu", {
        layout: "main"
    });
});

//----------------- ABOUT ------------------//

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main"
    });
});
//----------------- PROJECTS ------------------//

app.get("/projects", (req, res) => {
    res.render("projects", {
        layout: "main"
    });
});

//----------------- CONTACT ------------------//

app.get("/contact", (req, res) => {
    res.render("contact", {
        layout: "main"
    });
});
//-----------------------------------------------//

if (require.main == module) {
    app.listen(process.env.PORT || 8080, () =>
        chalkAnimation.rainbow("L I S T E N I N G . . .")
    );
}

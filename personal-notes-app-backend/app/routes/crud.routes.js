const { authJwt } = require("../middleware");
const controller = require("../controllers/crud.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // get saved notes of user
    app.get("/api/notes", [authJwt.verifyToken], controller.getPersonalNotes);
    // add new note 
    app.post("/api/notes", [authJwt.verifyToken], controller.createPersonalNote);
    // update existing note
    app.put("/api/notes", [authJwt.verifyToken], controller.updatePersonalNote);
    // delete existing note
    app.delete("/api/notes", [authJwt.verifyToken], controller.deletePersonalNote);
};
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const app = express();

// var corsOptions = {
//     origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));

//tempererily for handling the CORS error in local
const corsOptions = {
    origin: 'http://localhost:4200', // your Angular app's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(body_parser.json());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

// to be changed during prod setup
// db.sequelize.sync();


// below block of code is to be used during development phase of application backend to keep the db clean
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Personal Notes  application." });
});
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/crud.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "*****",
    DB: "peronal_notes_db",
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
        idleTimeoutMillis: 30000,
    }
};
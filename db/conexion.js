const mysql = require("mysql");


const conexion = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: "bfbab3fa271f46:45af1ec9",
    password: "45af1ec9",
    database: 'heroku_27af2b00f455817',
});

conexion.connect(function(err) {
    if (err) {
        console.log("err", err);
        throw err;
    };
    console.log("Base de datos conectada");
})

// conexion.end();

module.exports = conexion;
const mysql = require('mysql');


const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: "",
    port: process.env.PORT_DB,
    database: process.env.DB,
});

conexion.connect(function(err) {
    if (err) {
        console.log('err', err);
        throw err;
    };
    console.log("Base de datos conectada");
})

// conexion.end();

module.exports = conexion;
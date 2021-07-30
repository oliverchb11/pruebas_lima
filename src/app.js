const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require("express-myConnection");
const routerActions = require('../routers/solicitud-aceptada');
//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/api/v1/limaBack/solicitudes-tarjeta', routerActions);

//server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
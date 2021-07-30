const solicitudAceptadaController = {};
const { request, response } = require('express');
const conn = require('../db/conexion');
solicitudAceptadaController.get = (req = request, res = response) => {
    try {

        conn.query("SELECT * FROM estados", function(err, result) {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    msg: 'error en la consulta'
                });
            };
            res.status(200).json({
                title: 'Solicitud Aceptada',
                controller: 'solicitudAceptada',
                action: 'get',
                result
            });

        })

    } catch (error) {
        console.log('error de server', error);
    }
}
solicitudAceptadaController.post = (req = request, res = response) => {
    const dataBody = req.body;
    try {
        conn.query("UPDATE estados SET estado = ?", [dataBody.estado], (err, result) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    msg: 'error en la consulta'
                });
            };
            res.status(200).json({
                title: 'Solicitud Aceptada',
                controller: 'solicitudAceptada',
                action: 'get',
                result
            });

        })

    } catch (error) {
        console.log('error de server', error);
    }
}

module.exports = solicitudAceptadaController;
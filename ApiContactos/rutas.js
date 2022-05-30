const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./config/conexion'); //instanciar conexion




//asignacion de rutas
//consultar todos los contactos
rutas.get('/', (req, res) => {
    let query = 'SELECT * FROM CONTACTOS'
    conexion.query(query, (err, rows, fields) => {
        if (err) throw err;
        else res.json(rows)
    })
})

//consultar contacto por id
rutas.get('/:id', (req, res) => {
    const { id } = req.params
    let query = 'SELECT * FROM CONTACTOS WHERE IDCONTACTO = ?'
    conexion.query(query, [id], (err, rows, fields) => {
        if (err) throw err;
        else res.json(rows)
    })
})

//insertar contacto
rutas.post('/', (req, res) => {
    const { Nombre, Telefono, CorreoElectronico, FechaNacimiento } = req.body

    let query = `INSERT INTO CONTACTOS(Nombre, Telefono, CorreoElectronico, FechaNacimiento) VALUES('${Nombre}','${Telefono}','${CorreoElectronico}','${FechaNacimiento}')`
    conexion.query(query, (err, rows, fields) => {
        if (err) throw err
        else res.json({ status: 'Contacto Insertado!.' })
    })
})

//modificar contacto por id
rutas.put('/:id', (req, res) => {
    const { id } = req.params
    const { Nombre, Telefono, CorreoElectronico, FechaNacimiento } = req.body

    let query = `UPDATE CONTACTOS
                SET NOMBRE = '${Nombre}',
                TELEFONO = '${Telefono}',
                CORREOELECTRONICO = '${CorreoElectronico}',
                FECHANACIMIENTO = '${FechaNacimiento}'
                WHERE IDCONTACTO = '${id}'`

    conexion.query(query, (err, rows, fields) => {
        if (err) throw err
        else res.json({ status: 'Contacto Actualizado!.' })
    })
})


//eliminar por id
rutas.delete('/:id', (req, res) => {
    const { id } = req.params

    let query = `DELETE FROM CONTACTOS WHERE IDCONTACTO = '${id}'`
    conexion.query(query, (err, rows, fields) => {
        if (err) throw err
        else res.json({ status: 'Contacto Eliminado!.' })
    })
})


//exportar rutas
module.exports = rutas;
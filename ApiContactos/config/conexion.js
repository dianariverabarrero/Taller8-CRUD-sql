//configuracion de conexion a la base de datos MySql
const dbMySql = require('mysql');
//crear conexion a base de datos MySQL
const conexion = dbMySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port: 3306,
    database: 'db_contactostelefonicos'
});

//Valida si falla la conexion a DB muestra el error por consola
conexion.connect((err) => {
    if (err)
        console.log('Error de conexión Base de Datos \n' + err);
    else
        console.log('Conexión Base de Datos Exitosa!!!');
});

//permite que se pueda exportar esta conexion en todo el proyecto
module.exports = conexion;
//importa conexion
require('./config/conexion')

const express = require('express');

//recuperar puerto del servidor
const port = (process.env.port || 3000);

//instancia de express
const app = express();


//usar json
app.use(express.json())


//configurar puerto
app.set('port', port);


//rutas
app.use('/api', require('./rutas'));

//iniciar express

app.listen(app.get('port'), (error) => {
    if (error)
        console.log('Error en inicio de servidor ' + error);
    else
        console.log('Servidor Iniciado en el puerto ' + port);
});
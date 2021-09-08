
const express = require('express');
const app = express();
const path = require('path');


//configurations.
app.set('port', 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



//routs
app.use (require('./routers/index'));


// funcion para escuchar el puerto
app.listen(app.set('port'), () => {
    console.log("server en el puerto", app.set('port') );
});
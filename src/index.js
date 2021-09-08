
const express = require('express');
const app = express();
const path = require('path');


//configurations.
app.set('port', 3000);
app.set('view engine', 'ejs');
//routs


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
})

// funcion para escuchar el puerto
app.listen(app.set('port'), () => {
    console.log("server en el puerto", app.set('port') );
});
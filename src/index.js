
const express = require('express');
const app = express();

const path = require('path');
const ejs = require('ejs');

//configurations.


//routs


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
})

// funcion para escuchar el puerto
app.listen(3000, () => {
    console.log("server en el puerto", 3000 );
});
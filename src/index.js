
const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log("server en el puerto", 3000 );
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
})
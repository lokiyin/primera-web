const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index.html');
});

router.get('/cont', (req,res)=>{
    res.render('cont.html');
});


//exporta lo que haces en el archivo 
module.exports = router;

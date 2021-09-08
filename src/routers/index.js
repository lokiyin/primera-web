const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/cont', (req,res)=>{
    res.render('cont');
});


//exporta lo que haces en el archivo 
module.exports = router;

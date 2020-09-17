const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('To do List');
})

module.exports = router;
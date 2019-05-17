const express = require('express');
const createToken = require('../lib/auth').createToken

const router = express.Router();

router.post('/login', (req, res) =>{
    if(req.body.username === "user" && req.body.password === "password"){
        const token = createToken({
            firstName: "user"
        })
        res.status(201).send({token});
    } else {
        res.status(400).send({
            error: "invalid username/password"
        })
    }
    
});

module.exports = router;
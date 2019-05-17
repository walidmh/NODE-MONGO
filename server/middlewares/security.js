const verifyToken = require('../lib/auth').verifyToken;

const verify = (req, res, next) => {
    if (req.path === "/login") return next();

    const authHeader = req.get('Authorization');
    if (!authHeader || !authHeader.startWith('Bearer')) {
        return res.sendStatus(401);
    }
    
}
const {verifyToken} = require('../auth/jwt');
const auth = require('../models/auth');

const authMiddleware = async function (req, res, next) {
    let authToken = req.headers?.token;

    if (!authToken) {
        return res.status(401).json({
            message: 'No Token provided',
            status: 401
        });
    }

    if (authToken.toLowerCase().startsWith('bearer ')) {
        authToken = authToken.split(' ')[1];
    }

    const user = await verifyToken(authToken);
    if (!user || !user.id) {
        return res.status(401).json({
            message: 'Unauthorized: Invalid token',
            status: 401
        });
    }

    const verifiedAuth = await auth.findById(user.id);
    if (!verifiedAuth) {
        return res.status(401).json({
            message: 'Unauthorized: User not found',
            status: 401
        });
    }

    req.auth = verifiedAuth;
    next();
};

module.exports = {auth: authMiddleware};

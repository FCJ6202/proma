var jwt = require('jsonwebtoken');

const JWT_secret = "iamironman";

const fetchData = (req, res, next) => {
    try {
        const token = req.header('auth-token');
        var decoded = jwt.verify(token, JWT_secret);
        if (!decoded) {
            res.status(401).json({ error: "some internal error occured" });
        }
        req.UserData = decoded.User;
        next();
    } catch (error) {
        console.log(error);
        res.send({ error: "some internal error occured" });
    }
}

module.exports = fetchData;
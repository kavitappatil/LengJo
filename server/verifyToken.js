import jwt from 'jsonwebtoken';
import { createErrorMessage } from "./error.js";

export const verifyToken = (req, res, next) => { 
    const token = req.cookies.access_token
    if (!token) return next(createErrorMessage(401, "Access token not provided"));

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createErrorMessage(403, "Invalid Token"))
        req.user = user
        next()
    })
};

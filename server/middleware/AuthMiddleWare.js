import jwt from "jsonwebtoken"
import { User } from "../models/user";

async function verifyToken(token) {
    try {
        const decodedToken =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if(!decodedToken)
        {
            return false;
        }

        return decodedToken;

    } catch (error) {
        return false;
    }
    
}

export default verifyToken;
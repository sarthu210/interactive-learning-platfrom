import { User } from "../models/user";
import bcrypt from "bcrypt";

async function generateAccessAndRefreshTokens(userId){
    try {
        const user = User.findById(userId);
        const accessToken = await user.getAccessToekn();
        const refreshToken = user.refreshToken;

        return {accessToken , refreshToken};
    } catch (error) {
        console.log("Error While Creating Tokens");
    }
}

async function SignUpUser(req,res,next) {
    try {
        const { email , password, ...other} = req.body;

        const checkEmail = await User.findOne({ email });

        if(checkEmail)
        {
            return res.status(204).json({ "message" : "User Already Exist"})
        }

        if(!checkEmail)
        {
            const hashPassword = await bcrypt.hash(password , 10);

            const createdUser = await User.create({
                email: email,
                password: hashPassword,
                ...other
            })

            const checkCreatedUser = await User.findById(createdUser._id );

            if(checkCreatedUser)
            {
                const refreshToken = await createdUser.getRefreshToken();
                const accessToken = await createdUser.getAccessToekn();

                createdUser.refreshToken = refreshToken;
                await createdUser.save();

                const user = createdUser;

                return res.status(200).json({user , "accessToken" : accessToken , "refreshToken": refreshToken});
            }
            else
            {
                return res.status(400).json({"message" : "Bad Request"});
            }
        }
        
    } catch (error) {
        console.log("Failed To Create Account");
        return res.status(500).json({"message" : "Failed To Create Account"})
    }
}

async function SignInUser(req,res,next) {
    try {
        const {email , password} = req.body;

        const checkEmail = await User.findOne({ email });

        if(!checkEmail)
        {
            return res.status(404).json({"message" : "User Not Found"});
        }

        const user = await User.findOne({ email });

        if(checkEmail)
        {
            const checkPassword = await user.isPasswordCorrect(password);

            if(checkPassword)
            {
                const { accessToken , refreshToken} = await generateAccessAndRefreshTokens(user._id);

                return res.status(200).json({user , "accessToken" : accessToken, "refreshToken" : refreshToken});
            }
        }
        else{
            return res.status(401).json({"message" : "Unauthorized User"});
        }

    } catch (error) {
        console.log("Login Failed");
        return res.status(404).json({"meessage" : "Failed To Login"});
    }
}

async function verifyUser(req,res,next) {
    try {
        const token = req.body;

        const decodedToken =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if(!decodedToken)
        {
            return res.status(401).json({"message": "Unautharized Access"});
        }

        const user = await User.findById(decodedToken._id);

        if(!user)
        {
            return res.status(404).json({"message": "User Not Found"});
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(500).json({
            "message": "Internal Server Error"
        })
    }
    
}

async function GetUser(req,res,next) {
    try {
        if(!req.user)
        {
            return res.status(404).json({"message": "User Not Found"});
        }
        else{
            return res.status(404).json(req.user);
        }
         
    } catch (error) {
        return res.status(500).json({
            "message": "Internal Server Error"
        })
    }    
}
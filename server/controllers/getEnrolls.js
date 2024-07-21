import { enroll } from "../../client/src/slices/courseReducer.js";
import Enroll from "../models/enrolls.js";

async function getEnrolls(req,res){
    try{
        if(req.isAuthenticated()){
            const info = await Enroll.find({user: req.user._id});
            if(info.length === 0){
                return 0;
            }
            else{  
                const firstEnroll = info[0]; // get the first item in the info array
                res.status(200).json({
                    message: "Success",  
                    enrollId: firstEnroll._id,
                    progress: firstEnroll.progress,
                    Total_Levels: firstEnroll.Total_Levels,
                    Level1 : firstEnroll.Level1,
                    Level2 : firstEnroll.Level2,
                    Level3 : firstEnroll.Level3
                });
            }
        }
        else{
            res.status(401).json({
                message: "Unauthorized"
            });
        }
    }
    catch{
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

export default getEnrolls;
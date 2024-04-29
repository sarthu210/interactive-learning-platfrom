import Enroll from "../models/enrolls.js";

async function getCourse(req,res){
    try{
        if(req.isAuthenticated()){
            const info = await Enroll.find({user: req.user._id});
            if(info.length === 0){
                return 0;
            }
            else{
                res.status(200).json({
                    message: "Success",
                    data: info
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

export default getCourse;
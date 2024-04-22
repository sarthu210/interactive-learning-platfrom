import Enroll from "../models/enrolls";

async function getCourse(req,res){
    try{
        if(isAuthenticated){
            const info = await Enroll.find({user:req.user._id});
            res.status(200).json({
                progress: info.progress,
                course: info.course
            });
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
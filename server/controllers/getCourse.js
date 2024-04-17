import Enroll from "../models/enrolls";

async function getCourse(req,res){
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

export default getCourse;
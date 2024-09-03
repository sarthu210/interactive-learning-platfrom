import Enroll from "../models/enrolls.js";

async function levelSubmit(req, res) {
    
        try{
            const enrollId = req.body.enrollId;
            const level = req.body.level;
            const enroll = await Enroll.findById(enrollId);
            if(level === "Level 1"){
                enroll.Level1 = true;
                enroll.progress = 1;
            }
            else if(level === "Level 2"){
                enroll.Level2 = true;
                enroll.progress = 2;
            }
            else if(level === "Level 3"){
                enroll.Level3 = true;
                enroll.progress = 3;
            }
            
            await enroll.save();
            res.status(200).send(enroll);
        } catch (error) {
            res.status(500).send(error);
        }
    
}

export default levelSubmit;
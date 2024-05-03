import Enroll from "../models/enrolls.js";

async function levelSubmit(req, res) {
    if(req.isAuthenticated()){
        try{
            const enrollId = req.body.enrollId;
            const level = req.body.level;
            const enroll = await Enroll.findById(enrollId);
            if(level === 1){
                enroll.Level1 = true;
            }
            else if(level === 2){
                enroll.Level2 = true;
            }
            else if(level === 3){
                enroll.Level3 = true;
            }
            enroll.progress = 100%3;
            await enroll.save();
            res.status(200).send(enroll);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    else{
        res.status(401).send('Unauthorized');
    }
}

export default levelSubmit;
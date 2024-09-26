import Enroll from "../models/enrolls.js";

async function quizeSubmit(req, res) {
    
        try{
            const {name} = req.body;
            console.log(name);
            const user  = req.user;
            console.log(user);
            const enroll_id = user._id;
            console.log(enroll_id);
            const enroll = await Enroll.findOne({user: enroll_id});
            console.log(enroll);
            if(name === "level-1"){
                enroll.Quize1 = true;
                enroll.progress = 2;
            }
            else if(name === "level-2"){
                enroll.Quize2 = true;
                enroll.progress = 4;
            }
            else if(name === "level-3"){
                enroll.Quize3 = true;
                enroll.progress = 6;
            }
            
            await enroll.save();
            res.status(200).send(enroll);
        } catch (error) {
            res.status(500).send(error);
        }
    
}

export default quizeSubmit;
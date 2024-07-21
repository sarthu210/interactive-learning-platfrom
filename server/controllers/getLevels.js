import Level from '../models/levels.js'

async function getLevels(req, res) {
    
        try{
            const levelId = req.params.levelId;
            const levels = await Level.findById(levelId);
            res.status(200).send(levels);
        } catch (error) {
            res.status(500).send(error)
        }
    
}

export default getLevels;
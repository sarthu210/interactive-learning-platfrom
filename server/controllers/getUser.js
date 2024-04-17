function getUser(req,res){
    if(req.isAuthenticated()){
        return res.status(200).json(req.user);
    }
    else{
        return res.status(401).json({error: "User not authenticated"});
    }
}

export default getUser;


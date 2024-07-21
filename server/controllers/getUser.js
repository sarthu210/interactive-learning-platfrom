function getUser(req,res){
    if(req.isAuthenticated()){
        return res.status(200).json({
            user: req.user.name,
            email: req.user.email,
            passoutyear: req.user.passoutyear,
            branch: req.user.branch,
            course: req.user.course,
            message: "User authenticated"
        });
    }
    else{
        return res.status(401).json({error: "User not authenticated"});
    }
}

export default getUser;


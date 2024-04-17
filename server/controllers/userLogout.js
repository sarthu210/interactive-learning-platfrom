function UserLogout(req,res){
    req.session.destroy((err) => {
        if(err){
            res.status(500).json({error: 'Internal server error'});
        }

        res.clearCookie('connect.sid');

        return res.status(200).json({message: 'Logged out successfully'});
    });
}

export default UserLogout;
module.exports = {
    updateUser: (req, res)=>{
        const dbInstance = req.app.get("db");
        const {user_id} = req.user;
        const {username, email, name} = req.body;

        dbInstance.editUser([userID, username, email, name]).then(user =>{
            res.status(200).send(req.user);
        })
    }, getUSer: (req, res) => {
        res.status(200).send(req.user);
    }
    
}
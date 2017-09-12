module.exports = {
    updateUser: (req, res)=>{
        const dbInstance = req.app.get("db");
        const {userID} = req.session.user;
        const {username, email, name, img} = req.body;

        dbInstance.editUser([userID, username, email, name, img]).then(user =>{
            res.status(200).send(user);
        })
    }
    
}
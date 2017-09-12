module.exports = {
    updateUser: (req, res)=>{
        const dbInstance = req.app.get("db");
        const {userID} = req.session.user;
        const {username, email, name, img} = req.body;

        dbInstance.editUser([userID, username, email, name, img]).then(user =>{
            req.session.user = {
                userID: userID,
                username: username, 
                email: email, 
                name: name, 
                img : img
            }
            res.status(200).send(user);
        })
    }, getUSer: (req, res) => {
        res.status(200).send(req.session.user);
    }
    
}
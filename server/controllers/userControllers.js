module.exports = {
    updateUser: (req, res)=>{
        const dbInstance = req.app.get("db");
        const {userID} = req.session.user;
        const {username, email, name} = req.body;

        dbInstance.editUser([userID, username, email, name]).then(user =>{
            console.log(user);
            req.session.user = {
                userID: user[0].user_id,
                username: user[0].username, 
                email: user[0].email, 
                name: user[0].name, 
                img : user[0].img
            }
            console.log(req.session.user)
            res.status(200).send(req.session.user);
        })
    }, getUSer: (req, res) => {
        res.status(200).send(req.session.user);
    }
    
}
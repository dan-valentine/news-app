module.exports = {
    addSource: (req, res) =>{
        console.log("something");
        const dbInstance = req.app.get("db"); 
        const {userID} = req.session.user;
        const {sourceID} = req.body;
        
        dbInstance.addNewsSource([sourceID, userID]).then(source =>{
            res.status(200).send(source);
        });
    },
    removeSource: (req, res) =>{
        const dbInstance = req.app.get("db");
        const {userID} = req.session.user;
        const {sourceID} = req.body;

        dbInstance.removeNewsSource([sourceID, userID]).then(_ =>{
            res.status(200).send();
        });

    }, 
    getSources: (req, res) =>{
        const dbInstance = req.app.get("db");
        const {userID} = req.session.user;

        dbInstance.getNewsSources(userID).then(sources =>{
            res.status(200).send(sources);
        });
    }
}
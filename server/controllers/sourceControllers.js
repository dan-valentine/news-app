module.exports = {
    addSource: (req, res) =>{
        const dbInstance = req.app.get("db"); 
        const {userID} = req.session.user;
        const {sourceID, name, description, url} = req.body;
        
        dbInstance.addNewsSource([sourceID, name, description, url, userID]).then(source =>{
            res.status(200).send(source);
        });
    },
    removeSource: (req, res) =>{
        const dbInstance = req.app.get("db");
        const {userID} = req.session.user;
        const {sourceID} = req.query;
        console.log(JSON.stringify(req.query) +"--"+ userID);
        dbInstance.removeNewsSource([sourceID, userID]).then(_ =>{
            res.status(202).send();
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
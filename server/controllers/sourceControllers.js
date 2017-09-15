module.exports = {
    addSource: (req, res) =>{
        const dbInstance = req.app.get("db"); 
        const {user_id} = req.user;
        const {sourceID, name, description, url} = req.body;
        
        dbInstance.addNewsSource([sourceID, name, description, url, user_id]).then(source =>{
            res.status(200).send(source);
        });
    },
    removeSource: (req, res) =>{
        const dbInstance = req.app.get("db");
        const {user_id} = req.user;
        const {sourceID} = req.query;
        dbInstance.removeNewsSource([sourceID, user_id]).then(_ =>{
            res.status(202).send();
        });

    }, 
    getSources: (req, res) =>{
        const dbInstance = req.app.get("db");
        const {user_id} = req.user;

        dbInstance.getNewsSources(user_id).then(sources =>{
            res.status(200).send(sources);
        });
    }
}
module.exports = {
    addSavedStory: (req, res) =>{
        const dbInstance = req.app.get("db"); 
        const {user_id} = req.user;
        const {title, urlToImage, url, author, description} = req.body;
        
        dbInstance.addSavedStory([user_id, title, urlToImage, url, author, description]).then(()=>{
            dbInstance.getSavedStories(user_id).then(articles=>res.send(articles))
            .catch(err=>{
                console.log(err);
                res.status(500);
            })
        }).catch(err => {
            console.log(err);            
            res.status(500).send(err);
        })
    },
    getSavedStories: (req, res) =>{
        const dbInstance = req.app.get("db"); 
        const {user_id} = req.user;
        
        dbInstance.getSavedStories(user_id).then(articles=>res.send(articles))
            .catch(err=>{
                console.log(err);
                res.status(500);
            })
        
    },
    deleteSavedStory: (req, res) =>{
        const dbInstance = req.app.get("db");
        const {user_id} = req.user;
        
        dbInstance.removeSavedStory(req.params.id).then(()=>{
            dbInstance.getSavedStories(user_id).then(articles=>res.send(articles))
            .catch(err=>{
                console.log(err);
                res.status(500);
            }) 
        }).catch(err=>{
            console.log(err);
            res.status(500);
        }) 
    }
}
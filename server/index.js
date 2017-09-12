require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    session = require('express-session'),
    userCtr = require('./controllers/userControllers'),
    sourceCtr = require('./controllers/sourceControllers');

const app = express();



/////////////////////////
///TOPLEVEL MIDDELWARE///
/////////////////////////
app.use(cors());
app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))

///////////////////////////////////
////TESTING TOPLEVEL MIDDLEWARE////
///COMMENET OUT WHEN AUTH0 READY///
///////////////////////////////////
app.use((req, res, next) =>{
    req.session.user = {
        userID: 1,
        username: "douglsey", 
        email: "doug@dogmail.com", 
        name: "Doug Dogman", 
        img : "http://www.placekitten.com/200/250"

    }
    next();
})

////////////////////////////
///END TESTING MIDDLEWARE///
////////////////////////////

app.use(bodyParser.json());

//////////////
///DATABASE///
//////////////
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
})

///////////////
///ENDPOINTS///
///////////////

//source endpoints
app.post('/api/news_sources', sourceCtr.addSource);
app.get('/api/news_sources', sourceCtr.getSources);
app.delete('/api/news_sources', sourceCtr.removeSource);

//user endpoints
app.put('/api/user', userCtr.updateUser);


///////////////
///LISTENING///
///////////////
const port = 4000;
app.listen(port, ()=>{
    console.log(`Yo, What up? i'm port ${port} and welcome to my crib`);
})
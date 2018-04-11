require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    userCtr = require('./controllers/userControllers'),
    savedCtr = require('./controllers/savedControllers'),
    sourceCtr = require('./controllers/sourceControllers');

const app = express();



/////////////////////////
///TOPLEVEL MIDDELWARE///
/////////////////////////
app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

///////////////////////////////////
////TESTING TOPLEVEL MIDDLEWARE////
///COMMENET OUT WHEN AUTH0 READY///
///////////////////////////////////
app.use((req, res, next) =>{
    if(!req.session.user){
        req.session.user = {
            userID: 1,
            username: "douglsey", 
            email: "doug@dogmail.com", 
            name: "Doug Dogman", 
            img : "http://www.placekitten.com/200/250"
        }
    }
    next();
})

////////////////////////////
///END TESTING MIDDLEWARE///
////////////////////////////

////////////////////
///AUTHENTICATION///
////////////////////
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(processToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');

    db.findUser(profile.id).then(user =>{
        if(user.length){
            return done(null, user[0]);
        }else{
            let auth_id = profile.id; 
            let username = profile.displayName ? profile.displayName : ""; 
            let email = profile.emails ? profile.emails[0].value : "";
            let name = "";
            let img = profile.picture ? profile.picture: "";
            let userArr = [auth_id, username, email, name, img];
            db.addUser(userArr).then(user =>{
                return done(null, user[0]);
            })
        }
    })
}))

passport.serializeUser(function(user, done){
    done(null,user);
})

passport.deserializeUser(function(user, done){
    const db = app.get('db');
    db.findUser(user.auth_id).then(user =>{
        done(null, user[0]);
    });

    
})

//////////////
///DATABASE///
//////////////
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
})

///////////////
///ENDPOINTS///
///////////////

//auth endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}));
app.get('/auth/logout', (req, res)=>{
    req.logout();
    res.redirect(302, process.env.LOGOUT_URL);
})


//source endpoints
app.post('/api/news_sources', sourceCtr.addSource);
app.get('/api/news_sources', sourceCtr.getSources);
app.delete('/api/news_sources', sourceCtr.removeSource);

//saved stories endpoints
app.post('/api/saved_stories', savedCtr.addSavedStory);
app.get('/api/saved_stories', savedCtr.getSavedStories);
app.delete('/api/saved_stories/:id', savedCtr.deleteSavedStory);

//user endpoints
app.put('/api/user', userCtr.updateUser);
app.get('/api/user', userCtr.getUSer);

///////////////
///LISTENING///
///////////////
const {SERVER_PORT }= process.env;
app.listen(SERVER_PORT, ()=>{
    console.log(`Yo, What up? i'm port ${SERVER_PORT} and welcome to my crib`);
})
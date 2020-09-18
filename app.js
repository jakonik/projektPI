const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/index');

const app = express();







app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: 'sesja',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(flash());

app.use('/', routes);

module.exports = app;





//const db = require('../config/database');


//db.authenticate().then(() =>{
//    console.log('database connected')
//}).catch(err =>{
//    console.log("error: "+ err);
//});


/*



app.get('/', routerIndex);
// app.render
// app.get('/login', routerIndex);
app.get('/error', routerIndex);


app.get('/register', routerIndex);
app.post('/register', routerRegister);

app.post('/home', routerIndex);
app.get('/home', routerIndex);



app.get('/mojeankiety/:uspass', routerHome);

app.get('/dodajankiete', routerHome);
app.post('/dodajankiete', routerSurvey);
app.post('/addSurveyByKey', routerSurvey);
// app.get('/user', router);   routerShow

//app.get('/=', routerShow);
app.get('/zaladujankiete/:id/:pass', routerShow);

app.get('/wynikiankiety/:id/:usccv', routerShow);

app.post('/sendSurvey/:id', routerShow);
// app.get('/home', routerHome);

app.listen(port, console.log(`Serwer urochomiony na porcie 1337`));







*/
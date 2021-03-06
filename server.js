const express = require('express');
const app = express();

const exjwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

const secretKey = 'My super secret key';
const jwtMW = exjwt({
    secret: secretKey,
    algorithms: ['HS256']
});

let users = [
    {
        id: 1,
        username: 'corey',
        password: '123'
    },
    {
        id: 2,
        username: 'test',
        password: '321'
    }
]

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    for (let user of users) {
        if(username == user.username && password == user.password) {
            let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '7d' });
            res.json({
                success: true,
                err: null,
                token
            });
            break;
        } else {
            res.status(401).json({
                success: false,
                token: null,
                err: 'Username or password incorrect'
            });
        }
    }
    
});

app.get('/api/dashboard', jwtMW, (req, res) => {
    //console.log(req);
    res.json({
        success: true,
        myContent: 'Secret content that only logged in people can see!!!'
    });
    // window.addEventListener('popstate', e => console.log(e) );
    // history.pushState({success:true, myContent:'Dashboard pageeeee'}, '', '/api/dashboard')
});

app.get('/api/prices', jwtMW, (req, res) => {
    //console.log(req);
    res.json({
        success: true,
        myContent: 'The price is $3.99'
    });
});

app.all('/api/settings', jwtMW, (req, res) => {
    //var data = document.querySelector('main').innerHTML = 'Hello!';
    //myContent: 'hello';
    console.log(req);
    res.json({
        success: true,
        myContent: 'You are in the settings route now.'
    });
    history.pushState(res.json({ success:true, myContent:'You are in the settings route now.'}), '', '/api/settings.html')
    // res.send('ok');
    // window.addEventListener('popstate', e => console.log(e) );
    // history.pushState({success:true, myContent:'Settings pageeeee'}, '', '/api/settings')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function (err, req, res, next) {
    // console.log(err.name == 'UnauthorizedError');
    // console.log(err);
    if(err.name === 'UnauthorizedError') {
        res.status(401).json({
            success: false,
            officialError: err,
            err: 'Username or password is incorrect 2'
        });
    } else {
        next(err);
    }
});

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
});
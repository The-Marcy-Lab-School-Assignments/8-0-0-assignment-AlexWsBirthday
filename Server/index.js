//importing express 
const express = require('express');
//making your application by calling express()
const app = express();


// controllers, which handle all the (currently only GET) requests. 
const serveIndex = (req, res, next) => {
    //using an express method on the response object (sendFile) which creates a file directory? I think?
    res.sendFile(__dirname + '/index.html'); //where'd __dirname come from? Imported tool from express?
}

//Serves a heading for the information 
const serveAbout = (req, res, next) => {
    res.send('<h1>Backstage</h1>');
}

//Serves a test response 
const serveUm = (req, res, next) => {
    res.send('Um. Are you allowed to be back here?');
}

//serves data from a database held within the serveData controller 
const serveData = (req, res, next) => {
    const data = [{ name: 'ben', auth: true }, { name: 'zo', auth: true }, { name: 'carmen', auth: true }, { name: "biggie cheese", auth: false }];

    data.forEach((listed) => {
        res.send(`name: ${listed.name} || Authorized: ${listed.auth} --> ${listed.auth ? "Access granted!" : "Access denied."}`);
    })

}

// endpoints
//serve HTML
app.get('/', serveIndex);
app.get('/back', serveAbout);

//Serve data (labelled by '/api')
app.get('/api/um', serveUm);
app.get('/api/data', serveData);


// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
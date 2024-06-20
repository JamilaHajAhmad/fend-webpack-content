let projectData = {};
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)
const bodyParser = require('body-parser');

//  Middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/all',(request, response) => {
    response.send(projectData);
});


// POST Route
app.post('/add', addWeatherEntry);

function addWeatherEntry(request,response) {
    projectData = request.body;
    response.send(projectData);
}


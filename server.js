const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', function (req, res) {
    res.render('index.ejs');
})

app.post('/', function (req, res)) {
    res.render('index.ejs');
}

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
})

const path = require('path');
const express = require('express');

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Balamurugan',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Balamurugan M',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Docs',
    message: 'If you need help Google it.',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});

const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

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
    name: 'Bala@help.com',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia',
  });
});

app.get('*', (req, res) => {
  res.send('404 page not found');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});

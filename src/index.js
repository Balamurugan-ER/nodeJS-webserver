const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
app.get('/about', (req, res) => {
  res.send('About page');
});
app.get('/help', (req, res) => {
  res.send('Help Page');
});
app.get('/weather', (req, res) => {
  res.send({
    location: 'Madurai',
    forecast: 'Chill Morning',
  });
});
app.listen(3000, () => {
  console.log(`
    server is running at port 3000.
  `);
});

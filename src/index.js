const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
app.set('view engine', 'hbs');

app.get('', (req, res) => {
  res.render('index');
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

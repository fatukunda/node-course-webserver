const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
next();
});
// app.use((req, res, next) => {
//    res.render('maintenace.hbs');
// });
hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalize', (text) => {
   return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('index.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my Portfolio',
    })
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});
app.get('/bad', (req, res) => {
    res.send({
        status: 'Error has occurred'
    })
});
app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects page'
    })
});
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
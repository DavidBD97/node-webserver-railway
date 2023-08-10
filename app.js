require('dotenv').config();

const hbs = require('hbs')
const express = require('express')


const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');
// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) =>{
  res.render('home',{
    nombre: 'David Gonzalez',
    titulo: 'Curso de NODE'
  });
});

app.get('/generic', (req, res) =>{
  res.render('generic',{
    nombre: 'David Gonzalez',
    titulo: 'Curso de NODE'
  });
});

app.get('/elements', (req, res) =>{
  res.render('elements',{
    nombre: 'David Gonzalez',
    titulo: 'Curso de NODE'
  });
});



//ERROR
  app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html')
  })

//PUERTO
app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})
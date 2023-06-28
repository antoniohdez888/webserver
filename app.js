import * as url from 'url';
import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath( new URL('.', import.meta.url) );

dotenv.config();

const port = process.env.PORT;

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático

app.use( express.static('public') );

app.get('/', ( req, res ) => {
    
    res.render('home', {
        nombre: 'Marco Hernández',
        titulo: 'Curso de NodeJS'
    });

});

app.get('/generic', ( req, res ) => {
    
    res.render('generic', {
        nombre: 'Marco Hernández',
        titulo: 'Curso de NodeJS'
    });

});

app.get('/elements', ( req, res ) => {
    
    res.render('elements', {
        nombre: 'Marco Hernández',
        titulo: 'Curso de NodeJS'
    });

});

app.get('*', ( req, res ) => {
    
    res.sendFile(__dirname+'/public/404.html');

});

app.listen( port, () => {
    console.log(`Example app listening at http:127.0.0.1:${port}`);
});
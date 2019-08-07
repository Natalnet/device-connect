const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
// Conexão banco de dados
mongoose.connect('mongodb://localhost:27017/deviceconnect', {useNewUrlParser: true})
  .then( res => console.log('Banco Conectado!'))
  .catch( err => console.log(err));
//Configurando Body Parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Configurandno o View Engine
app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
//Definindo Cookie
app.use(cookieParser());
//Chamando as rotas 
app.use(require('./routes'));
//Conexão com o Socket.io
io.on('connection', (socket) => {
   if (req.cookies) {

   }
  });
//Subindo o servido na porta 5000
http.listen(process.env.PORT || 5000);
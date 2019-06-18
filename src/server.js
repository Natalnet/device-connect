const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const expressLayouts = require('express-ejs-layouts');
//Configurando Body Parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Configurandno o View Engine
app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
//Chamando as rotas 
app.use(require('./routes'));
//Conexão com o Socket.io
io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.id);
  });
//Subindo o servido na porta 5000
http.listen(5000);
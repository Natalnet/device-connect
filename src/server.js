const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

//Configurando Body Parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Configurandno o View Engine
app.set('views', 'src/views');
app.set('view engine', 'ejs');
//Chamando as rotas 
app.use(require('./routes'));
//Conexão com o Socket.io
io.on('connection', (socket) => {
    console.log('a user connected');
  });
//Subindo o servido na porta 5000
http.listen(5000);
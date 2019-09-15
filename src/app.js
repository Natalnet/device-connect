import express from 'express';

class App{
    constructor(){
        this.server = express();
        console.log('FOI')
        this.middlewares();
        this.routes();
    };

    middlewares(){

    };

    routes(){
        //this.server.use(routes);
    };
    
};

export default new App().server;
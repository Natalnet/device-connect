const bcryptjs = require('bcryptjs');
const router = require('express').Router();
const Device = require('./models/device');
const User = require('./models/user');

const salt = bcryptjs.genSaltSync(10);

router.get('/', (req, res, next) => {
    console.log(req.cookies);
    res.render('home', {extractScripts: true});
})
router.route('/cadastrardevice')
    .get((req,res, next) => {
        if(req.cookies === {}) {
            res.render('cadastrardevice')
        } else {
            res.redirect('/cookie');
        }
    })
    .post((req, res, next) => {
        const {nome, tipo, local} = req.body;
        const newDevice = new Device({nome, tipo, local});
        newDevice.save()
            .then( result => console.log(result))
            .catch( err => console.log(err) );
        res.cookie("id", newDevice._id);
        res.cookie("nome", nome);
        res.cookie("tipo_dispositivo", tipo);
        res.cookie("local", local);
        res.redirect('/cookie');
    });

router.route('/login')
    .get((req, res, next) => {
        res.render('login');
    })
    .post((req, res, next) => {

    })
router.route('/register')
    .get((req, res, next) => {
        res.render('register', {error: ''});
    })
    .post((req, res, next) => {
        const { name, email, password, confpassword } = req.body;
        User.find({email: email}).then(response => {
            console.log(response.length);
            
            if(response.length === 0){
                if( password === confpassword ){
                    const hash = bcryptjs.hashSync(password, salt )
                    const newUser = new User({email, name, password: hash});
                    newUser.save().catch(err => console.log(err));
                    res.redirect('/login');
                } else {
                    res.render('register',{error: 'As senhas não são compatíveis!'});
                }    
            } else {
                res.render('register',{error: 'Este Email já foi cadastrado!'});
            }
        });
        
    })


router.get('/teste', (req, res, next) => {
    res.render('dashboard');
})
module.exports = router;
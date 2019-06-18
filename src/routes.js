const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('home', {extractScripts: true});
})

module.exports = router;
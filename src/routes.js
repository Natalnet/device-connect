const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('funcionando');
})

module.exports = router;
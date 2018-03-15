const express = require('express');
const router = express.Router();

const helloController = require('../controllers/hello-controller');

/** Api para obtener y reproducir el audio de una cancion */
router.get('/test', function (req, res) {
    res.send({
        id: 1234,
        name: 'respuesta de prueba',
        tokens: [12.54, 'pepe']
    });
});

router.get('/hello/:name', helloController.hello);

router.get('/index', (req, res) => {
    res.render('index', { title: 'tp0' });
})

module.exports = router;
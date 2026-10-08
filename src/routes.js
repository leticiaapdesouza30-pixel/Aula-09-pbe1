const express = require("express")
const router = express.Router()

const Usuario = require('./controllers/usuario')
const rotaInicial = (req, res) => {
    res.json("Back-end Eventos")
}

router.get('/',rotaInicial)
router.get('/usuarios',Usuario.listar)

module.exports = router
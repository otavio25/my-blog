const express = require('express')
const router = express('router')
const controller = require('../controller/listagem_textos_controller')

router.get("/texto", controller.get_titulo)
router.get("/textos", controller.get_classificacao)

module.exports = router
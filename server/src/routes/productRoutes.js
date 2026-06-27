const express = require('express')
const router = express.Router()

const {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    editarProducto,
    eliminarProducto
} = require('../controllers/productController')

const { verificarToken, verificarAdmin } = require('../middleware/auth')

router.get('/', obtenerProductos)
router.get('/:id', obtenerProductoPorId)

router.post('/', verificarToken, verificarAdmin, crearProducto)
router.put('/:id', verificarToken, verificarAdmin,editarProducto)
router.delete('/:id', verificarToken, verificarAdmin, eliminarProducto)

module.exports = router
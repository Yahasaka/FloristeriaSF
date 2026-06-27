const pool = require('../config/db')

async function obtenerProductos(req, res) {

    try { 
        
        const resultado = await pool.query ('Select * from productos order by id asc')
        res.json({ productos: resultado.rows })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error en el request de productos' })
    }
}

async function obtenerProductoPorId(req, res) {

    const { id } = req.params   

    try {

        const resultado = await pool.query (
            'Select * from productos where id = $1',
            [id]
        )

        if (resultado.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        res.json({ producto: resultado.rows[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al obtener el producto' })
    }
}

async function crearProducto(req, res) {

    const { nombre, descripcion, precio, categoria, subcategoria, flores, stock } = req.body

    try {
        const resultado = await pool.query(
            `Insert into productos (nombre, descripcion, precio, categoria, subcategoria, flores, stock)
            values ($1, $2, $3, $4, $5, $6, $7)
            returning *`,
            [nombre, descripcion, precio, categoria, subcategoria, flores, stock]
        )

        res.status(201).json({ producto: resultado.rows[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al crear producto'})
    }
}

async function editarProducto(req, res) {
    
    const { id } = req.params
    const { nombre, descripcion, precio, categoria, subcategoria, flores, disponible, stock } = req.body

    try {

        const resultado = await pool.query(
            `update productos
            set nombre = $1, descripcion = $2, precio = $3, categoria = $4, subcategoria = $5, flores = $6, disponible = $7, stock = $8 where id = $9
            returning *`,
            [nombre, descripcion, precio, categoria, subcategoria, flores, disponible, stock, id]
        )

        if (resultado.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        res.json({ producto: resultado.rows[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al editar el producto'})
    }
}

async function eliminarProducto(req, res) {
    
    const { id } = req.params

    try {

        const resultado = await pool.query(
            'delete from productos where id = $1 returning *',
            [id]
        )

        if (resultado.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado'})
        }

        res.json({ mensaje: 'Producto eliminado correctamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al eliminar el producto'})
    }
}

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    editarProducto,
    eliminarProducto
}
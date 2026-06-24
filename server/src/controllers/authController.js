const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const pool = require ('../config/db')

async function register(req, res) {
    
    const { nombre, apellido, correo, contrasena } = req.body
        
    try {
        const usuarioExistente = await pool.query (
            'Select * from usuarios where correo = $1', [correo]
        )

        if ( usuarioExistente.rows.lenght > 0 ) {
            return res.status(400).json({ error: 'Ese correo ya está registrado' })
        }

        const constrasenaHasheada = await bcrypt.hash(contrasena, 10)

        const nuevoUsuario = await pool.query (
            `Insert into usuarios (nombre, apellido, correo, contrasena) values ($1, $2, $3, $4)
            returning id, nombre, apellido, correo, rol`, [nombre, apellido, correo, constrasenaHasheada]
        )

        const usuario = nuevoUsuario.rows[0]

        const token = jwt.sign (
            { id: usuario.id, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.status(201).json({ usuario, token })

    } catch (error) {

        console.error(error)
        res.status(500).json({ error: 'Error al registrar usuario' })
    }
}

async function login (req, res) {

    const {correo, contrasena} = req.body

    try {
        
        const resultado = await pool.query (
            'Select * from usuarios where correo = $1', [correo]
        )

        if ( resultado.rows.length === 0 ) {
            return res.status(401).json({ error: 'Correo o contrasena incorrectos' })
        }

        const usuario = resultado.rows[0]

        const contrasenaValida = await bcrypt.compare( contrasena, usuario.contrasena )

        if (!contrasenaValida) {
            return res.status(401).json({ error: 'Correo o contraseña incorrectos' })
        }

        const token = jwt.sign( 
            { id: usuario.id, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: '7d'}
        )

        res.json({ 
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                correo: usuario.correo,
                rol: usuario.rol
            },
            token
        })

    }   catch ( error ) {
        console.error( error )
        res.status(500).json({ error: 'Error al iniciar sesión'})
    }
}

async function perfil (req, res) {

    try {

        const resultado = await pool.query (
            'Select id, nombre, apellido, correo, rol, telefono from usuarios where id = $1',
            [req.usuario.id]
        )

        if (resultado.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' })
        }

        res.json({ usuario: resultado.rows[0] })

    } catch (error) {
        console.error( error )
        res.status(500).json({ error: 'Error al obtener el perfil' })

    }
}

module.exports = { register, login, perfil }
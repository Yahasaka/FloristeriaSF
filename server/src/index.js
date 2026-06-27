const express = require ('express')
const cors = require ('cors')
require ('dotenv').config()

const pool = require ('./config/db')

const authRoutes = require ('./routes/authRoutes')
const productRoutes = require ('./routes/productRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Servidor Running '})
})

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()')
        res.json({ conectado: true, hora: result.rows[0].now })
    } catch(error) {
        res.status(500).json({ conectando: false, error: error.message })
    }
})

app.use('/api/auth', authRoutes)
app.use('/api/productos', productRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// Define la carpeta donde se encuentran los archivos estáticos (en este caso, nivel superior)
app.use(express.static(path.join(__dirname, './src/public')));
app.use(cors());
// Configura una ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/public', 'index.html'));
});

// Resto de tu configuración...

// Inicia el servidor en un puerto específico (por ejemplo, el puerto 3000)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


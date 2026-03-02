
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Servicio funcionando correctamente" });
});

app.listen(3000, () => {
    console.log("Servicio ejecutándose en puerto 3000");
});

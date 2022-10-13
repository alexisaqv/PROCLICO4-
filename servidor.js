const servidorweb = require("express"); 

const app = servidorweb();
const puerto = 3000

app.get('/', ( req, res ) => { 
    res.send("Estas consultando la raiz de la API")
});

app.listen(puerto, () => { 
    console.log("El servidor esta en ejecucion el puerto" + puerto);
});
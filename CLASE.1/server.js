import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 5000; 

//CONFIG EXPRESS 
app.use(cookieParser("secret"));

//ruta para probar que el servidor este funcionando 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Ruta para crear una cookie SET COOKIE

app.get("/set-cookie", (req, res)=>{
    res.cookie("nombre-cookie", "valor de cookie",{
        maxAge: 30000,
    })
    res.send("cookie creada")
});

// Ruta para obtener una cookie GET COOKIE

app.get("/get-cookie", (req,res)=>{
    const cookie = req.cookies;
    res.send(cookie); 
}); 

// Ruta para borrar una cookie DELETE COOKIE

app.get("/delete-cookie", (req,res)=>{
    res.clearCookie("nombre-cookie");
    res.send("cookie-eliminada");
})


//caso real para SETEAR COOKIE 
app.post("/login", (req,res)=>{
    //logica del login 
    res.cookie("token", "123456",{
        maxAge: 600000, // 10 minutos
    });
    res.send("Login exitoso");
})

// SET COOKIES FIRMADAS (SIGNED COOKIES)
//app.use(cookieParser("s3cr3t")); => ideal poner en una variable de entorno, código para mantener oculto  
//SIGNED:TRUE

app.get("/set-cookie-signed", (req, res )=>{
    res.cookie("cookie-firmada", "esta es una cookie firmada",{
        maxAge:10000,
        signed: true, // activa firma digital
    });
    res.send("Cookie firmada creada");
})
// devuelve: s%3Aesta%20es%20una%20cookie%20firmada.TOndHKFdMYYWKuwoYSbLWXzhvB2TUARhdx41sE8nfHA 
//el cliente no puede ver las cookies firmadas 
//para poder acceder a las cookies firmadas usar el método req.signedCookies

app.get("/get-cookie-signed", (req, res)=>{
    const cookie = req.signedCookies;
    console.log(cookie);
    res.send(cookie);
})








app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`);

}); 


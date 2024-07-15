**secret:** clave secreta, ideal en un archivo.env
**resave:** true  permite mantener la sesión activa 
**resave :**  false  la sesión morirá luego de cierto tiempo de inactividad
**saveUninitialized: true,**  para guardar la sesión sin inicializar, la sesión se crea ni bien se conecta el cliente
**cookie: {secure: false}** Esta línea habilita las cookies en modo seguro, pero en desarrollo se puede deshabilitar para ver la información en la consola del navegador.  
**secure: true** en producción.  
**maxAge: 600000** (1 minuto) 
**expires: new Date(Date.now() + 600000)**  expires en milisegundos. 
**httpOnly: true**    Evita que se acceda a las cookies desde JavaScript.   
**SameSite: "none"**   Asegura que las cookies sean solamente enviadas con el método HTTP (GET, POST, PUT, DELETE).   
**SameSite: "lax"**    Asegura que las cookies sean solamente
```
app.use(session({
    secret: "secretKey",
    resave: false,  
    saveUninitialized: true,
    //cookie: { secure: false }  
    }));
``` 

 


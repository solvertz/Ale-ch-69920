import express from "express";
import session from "express-session";


const app = express(); 
const PORT = 3000; 

app.use(session({
    secret: "secretKey",
    resave: false,  
    saveUninitialized: true,
    //cookie: { secure: false }  
    }));


// se crea la sesion dentro del objeto req
app.get("/", (req, res)=>{
    const {user} = req.query; 
    if(req.session.counter){
        req.session.counter++;
        if(user){
            return res.send(`${user}, has visitado esta página ${req.session.counter} veces.`);
        }return res.send(`has visitado esta página ${req.session.counter} veces.`)
    }else{
        req.session.counter = 1;
        if(user){
            return res.send(`${user}, has visitado esta página ${req.session.counter} vez.`);
        }return res.send(`Bienvenido a la página! has visitado esta página ${req.session.counter} vez.`);
    }
});

/* req.session.count = (req.session.count || 0) + 1;
res.send(`Hola ${user}, has visitado esta página ${req.session.count} veces.`); */


app.listen(PORT, ()=>[
    console.log(`Welcome!! http://localhost:${PORT}`)
]); 
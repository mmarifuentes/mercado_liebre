const express= require("express");
const app = express();
const path= require("path"); 

app.use(express.static("public"));

const port= process.env.PORT || 3001;

app.listen(port, () => console.log("servidor corriendo en el puerto 3001"));

app.get("/", (req,res) => { res.sendFile(path.join(__dirname, "./views/home.html"))  
});

app.get("/registro", (req,res) => { res.sendFile(path.join(__dirname, "./views/register.html"))  
});

app.get("/login", (req,res) => { res.sendFile(path.join(__dirname, "./views/login.html"))  
});
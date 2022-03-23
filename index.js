const express = require('express');
const app = express();
app.use(express.json())
const midelware=require('./Midelware')
 app.get('/', (req, res) => res.send('Hello World!'));
/* console.log(__dirname)  */
/*  app.get("/Home",(req,res)=>{
    res.sendFile(__dirname);
}); */ 
console.log(__dirname)
app.use(midelware)
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/Pages/Contactus.html")
})

app.get("/Home",(req,res)=>{
    res.sendFile(__dirname+"/Pages/HomePage.html")
})

app.get("/Services",(req,res)=>{
    res.sendFile(__dirname+"/Pages/OurServices.html")
})
app.listen(3000, () => console.log('Example app listening on port 3000!'));
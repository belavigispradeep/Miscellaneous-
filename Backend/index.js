const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`Registration GET page, WellCome ${user} and your password is ${password}`);
});
app.post("/register",(req,res)=>{
    console.log(req.body)
    let {user,password}=req.body;
    res.send(`Registration POST page,WellCome ${user} and security pin is ${password}`);
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
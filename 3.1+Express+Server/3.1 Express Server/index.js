import express from "express";
const app= express();
const port= 3000;

app.get("/", (req,res)=> {
  res.send("<h1> Hello </h1>");
})

app.post("/about", (req,res)=> {
  res.send("<h1> About Us </h1>");
})

app.put("/about", (req,res)=> {
  res.sendStatus(200);
})

app.patch("/about", (req,res)=> {
  res.sendStatus(404);
})

app.delete("/about", (req,res)=> {
  res.sendStatus(500);
})

app.listen(port, ()=> {
  console.log(`The server is running on ${port}.`);
})
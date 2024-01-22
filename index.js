import express from "express";

const app=express();
const port=3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

function getCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-US', options);
  return today;
}

app.get("/", (req, res) => {
   const todos= [];
    res.render("index.ejs", {todos, getCurrentDate});
  });

app.post("/submit",(req,res)=>{
    const newTodo = req.body["submitData"];
    todos.push(newTodo);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
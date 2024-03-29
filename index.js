const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Todo = require('./models/todo')
const path = require('path');

app.use(express.static(path.join(__dirname, 'vite-project')));
// didn't include the ../ part because the static middleware uses an absolute path. it u don't need to step out with ../

app.use(express.json())

app.post('/List',async(req,res)=>{
  try{
    const todo = await Todo.create(req.body)
    res.status(200).json(todo);
  } catch(error) {
    console.log(error.message)
    res.status(500).json({message:error.message});
  }
});

app.get('/List',async(req,res) => {
  try{
     const todo = await Todo.find({});
     res.status(200).json(todo);
     res.send("Hello");
  }  catch(error) {
     res.status(500).json({message:error.message})
  }
 })

app.put('/List/:id',async(req,res)=>{
  try{
    const {id} = req.params
  const todo = await Todo.findByIdAndUpdate(id, req.body);
  if(!todo){
    return res.status(404).json({message: `cannot find any task with ID:${id}`})
  }
  
  res.status(200).json(todo);
  }catch (error) {
res.status(500).json({message:error.message})
}
});

app.delete('/List/:id',async(req,res) => {
  try{
     const {id} = req.params
     const todo = await Todo.findByIdAndDelete(id);
     if(!todo){
      return res.status(404).json({message:`cannot find task with ID:${id}`})
     } 
     res.status(200).json(todo)
  } catch (error) {
     res.status(500).json({message:error.message})
  }
})

app.delete('/List/:id',async(req,res) => {
  try{
     const {id} = req.params
     const todo = await Todo.findByIdAndDelete(id);
     if(!todo){
      return res.status(404).json({message:`cannot find task with ID:${id}`})
     } 
     res.status(200).json(todo)
  } catch (error) {
     res.status(500).json({message:error.message})
  }
})

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    app.listen(8000, () => {
        console.log("Server is running on port 8000");
      });      
})
//the connect fxn is async meaning it takes sometime to do, i attached a then block because i want to start the server only when i am connected to the server

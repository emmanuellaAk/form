const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Todo = require('./models/todo')

app.use(express.json())

app.post('/List',async(req,res)=>{
  try{
    const todo = await Todo.create(req.body)
    res.status(200).json(todo);
  } catch(error) {
    console.log(error.message)
    res.status(500).json({message:error.message})
  }
})

app.get('/List',async(req,res) => {
  try{
    const {id} = req.params;
     const todo = await Todo.find({});
     res.status(200).json (todo);
  } catch(error) {
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
})

app.delete('/Products/:id',async(req,res) => {
  try{
     const {id} = req.params
     const product = await Product.findByIdAndDelete(id);
     if(!product){
      return res.status(404).json({message:`cannot find product with ID:${id}`})
     } 
     res.status(200).json(product)
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











app.listen(8000, () => {
  console.log("I AM TRYING")
})

mongoose.connect("mongodb://localhost/todo")
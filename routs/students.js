const express = require('express');
const Student=require('../models/Student');


const router = express.Router();
router.get('/', async function (req, res){
   try {
const students = await Student.find();
res.json(students);
   }
   catch (err){
       res.status(500).json({message:err.message});
   }
    
})
router.get('/:id', async function (req, res){
   try {
       const single_student = await Student.findById(req.params.id);
       res.json(single_student);
   } catch (error) {
       RES.status(500).json({message:error.message});
   }

})
router.post('/',async function (req, res){
  
    const new_student=new Student({
        name:req.body.name,
        university:req.body.university,
        regestration_year:req.body.regestration_year,
        graduation_year:req.body.graduation_year
    });
    try {
    const db_student = await new_student.save();
    res.status(201).json(db_student);
    }
    catch (err){
        res.status(400).json({message:err.message});
    }
   

})
router.patch('/:id', async function (req, res){
    const info_Update={
        name:req.body.name,
        university:req.body.university,
        regestration_year:req.body.registration_year,
        graduation_year:req.body.graduation_year
    };
    try {
    const update_student = await Student.findByIdAndUpdate(req.params.id, info_Update); 
    const updated_student = await Student.findById(req.params.id);
    res.status(201).json(updated_student);
    }
    catch (err){
        res.status(400).json({message:err.message});
    }
   



    
})
router.delete('/:id', async function (req, res){
    try {
        const deleted_student = await Student.findByIdAndRemove(req.params.id);
        res.status(204).json({message:"student has been deleted"});
        
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
})
module.exports=router
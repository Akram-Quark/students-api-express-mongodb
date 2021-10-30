const express = require('express');
const Subscriber=require('../models/Subscriber');


const router = express.Router();
router.get('/', async function (req, res){
   try {
const subscribers = await Subscriber.find();
res.json(subscribers);
   }
   catch (err){
       res.status(500).json({message:err.message});
   }
    
})
router.get('/:id', async function (req, res){
   try {
       const single_subscribers = await Subscriber.findById(req.params.id);
       res.json(single_subscribers);
   } catch (error) {
       RES.status(500).json({message:error.message});
   }

})
router.post('/',async function (req, res){
    console.log(req.body);
    const subscriber=new Subscriber({
        name:req.body.name,
        subsToChanel:req.body.subsToChanel
    });
    try {
    const db_subscriber = await subscriber.save();
    res.status(201).json(db_subscriber);
    }
    catch (err){
        res.status(400).json({message:err.message});
    }
   

})
router.patch('/:id', async function (req, res){
    const subscriber_Update={
        name:req.body.name,
        subsToChanel:req.body.subsToChanel
    };
    try {
    const updated_sub = await Subscriber.findByIdAndUpdate(req.params.id, subscriber_Update); 
    res.status(201).json(updated_sub);
    }
    catch (err){
        res.status(400).json({message:err.message});
    }
   



    
})
router.delete('/:id', async function (req, res){
    try {
        const deleted_subscriber = await Subscriber.findByIdAndRemove(req.params.id);
        res.status(204).json({message:"subscriber has been deleted"});
        
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
})
module.exports=router
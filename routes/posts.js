const express = require('express');
const router= express.Router()
const post = require('../models/post')

//create method
router.route('/').post(async(req,res)=>{
    const Post = new post({
        title:req.body.title,
        description:req.body.description,
    })
     const val = await Post.save()
     res.json(val)
})

//get all method
router.get('/',async(req,res)=>{
    let posts = await post.find()
    res.send(posts)
})

//get single method
router.get('/:id',async(req,res)=>{
    let singlePost = await post.findById(req.params.id)
    res.send(singlePost)
})


//update method
router.patch('/:id', async(req,res)=>{
    const updatePost = await post.updateOne({_id:req.params.id},
        {$set: {title: req.body.title,
               description:req.body.description}})
    res.json(updatePost)
})

//delete method
router.delete('/:id',async(req,res)=>{
   let deleted = await post.remove({_id: req.params.id})
   res.json(deleted)
})


module.exports=router
const path= require('path')
const rootDir= require('../util/path')
const Blog= require('../models/Blog')
const Comments= require('../models/Comments')


exports.getBlog = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'blog.html'))
};

exports.postBlog= async (req,res,next)=>{
    try{
        const title= req.body.title;
        const author= req.body.author;
        const description=req.body.description;
        await Blog.create({
            title: title,
            author: author,
            description: description
        })
        res.redirect('/')
    }catch (err){
        console.log(err)
    }
}

exports.getBlogData = async (req,res,next)=>{
    try{
        const blogs= await Blog.findAll()
        res.status(201).json({allBlogs: blogs})
    }catch(err) {
        console.log(err)
    }
}

exports.postBlogDetails =(req,res,next)=>{
    res.redirect('/')
}

exports.getBlogDetails= async (req,res,next)=>{
    const Id= req.params.blogId 
    const Details= await Blog.findAll({where: {id: Id}})
    res.status(201).json({Details: Details})
}

exports.postComments= async(req,res,next)=>{
    try{
        const comments= req.body.comment
        const Id= req.params.blogId
        console.log(req)
        await Comments.create({
            comments: comments,
            BlogId: Id
        })
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}

exports.getComments= async(req,res,next)=>{
    try{
        const Id= req.params.blogId
        const comments= await Comments.findAll({where: {BlogId: Id}})
        res.json(201).json({allComments: comments}) 
    }catch(err){
        console.log(err)
    }
}

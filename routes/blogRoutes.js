const blog= require('../controllers/blogController')
const express= require('express')

const router= express.Router()

router.get('/',blog.getBlog)
router.post('/get-blog', blog.postBlog)
router.get('/get-blog',blog.getBlogData)
router.post('/get-blogDetails/:blogId', blog.postBlogDetails)
router.get('/get-blogDetails/:blogId',blog.getBlogDetails)
router.post('/get-comments/:blogId',blog.postComments)
router.get('/get-comments/:blogId',blog.getComments)
router.delete('/delete-comment/:commentId',blog.deleteComments)

module.exports= router
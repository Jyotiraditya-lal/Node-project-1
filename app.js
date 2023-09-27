const express= require('express')
const bodyParser= require('body-parser')
const sequelize=require('./util/database')
const path= require('path')
const blogRoutes= require('./routes/blogRoutes')
const Blog= require('./models/Blog')
const Comment= require('./models/Comments')

const app= express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

app.use(blogRoutes)

Blog.hasMany(Comment)

sequelize.sync().then(result=>{
    app.listen(3000)
}).catch(err=>{
    console.log(err)
})
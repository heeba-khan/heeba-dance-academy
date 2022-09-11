const express=require("express");
const path=require("path");
const app= express();
const port=8000;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug')//set the template engine as pug
app.set('views', path.join(__dirname,'views'))//set the views directory

//END POINTS
app.get('/',(req,res)=>{
    const con ="This is the best content on internet so far so  use it wisely";
    const params={}
    res.status(200).render('/github.io/home.pug', params)

})

app.get('/contact',(req,res)=>{
    const con ="This is the best content on internet so far so  use it wisely";
    const params={}
    res.status(200).render('/github.io/contact.pug', params)

})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})


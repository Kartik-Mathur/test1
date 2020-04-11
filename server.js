const app = require('express')()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/hi',(req,res)=>{
    res.send('Hello')
})

const PORT = process.env.PORT||3333
app.listen(PORT,()=>{
    console.log('server started '+ PORT)
})
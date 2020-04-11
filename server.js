const app = require('express')()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

const PORT = process.env.PORT||3333
app.listen(PORT,()=>{
    console.log('server started '+ PORT)
})
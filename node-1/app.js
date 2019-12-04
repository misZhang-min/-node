let express = require('express')
let fs = require('fs')
let app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json());


let list = require('./mock/data.json')
app.get('/data/list',(req,res)=>{
    res.send(list)
    
})
app.get('/data/search',(req,res)=>{
    console.log(req)
    console.log(req.query)
    let result = list.filter((item,index)=>{
        return item.num.includes(req.query.value) || item.name.includes(req.query.value)
    })
    res.send(result)
})


app.listen(8080,()=>{
    console.log('成功')
})
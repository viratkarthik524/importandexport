const express= require("express")
const addDays=require("data-fns/addDays")
const app=express()
app.get("/"(req,res)=>{
    const datetime=new Date();
const result =addDays(
    new Date(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),100  )
)
res.send(`${result.getDate()}-${result.getMonth()+1}-${result.getFullYear()`)
})
module.exports=add
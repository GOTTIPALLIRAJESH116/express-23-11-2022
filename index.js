const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const emp=[{id:1,name:"rajesh",rno:203116,avatar:"https://staticlallantop.akamaized.net/images/post/1665403568292_suriya_rolex.webp"},{id:2,name:"shiva",rno:203109,avatar:"https://images.newindianexpress.com/uploads/user/imagelibrary/2022/6/4/w1200X800/Vikram.jpg"},{id:3,name:"trinath",rno:203125,avatar:"https://static.toiimg.com/thumb/msid-92855511/92855511.jpg?width=500&resizemode=4"},{id:4,name:"karthik",rno:203114,avatar:"https://gumlet.assettype.com/dtnext%2F2022-06%2F557edd06-e49d-485d-bfcc-c86abb9ae778%2FKaithi.jpg?rect=0%2C0%2C999%2C562&auto=format%2Ccompress&fit=max&format=webp&w=400&dpr=2.6"}]
const students=require("./data.js")

app.use(cors());
app.get("/",(req,res)=>{
	res.send("Codered is activated")
})
app.get("/user",(req,res)=>{
	res.send("this is rajesh")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})

app.get("/students",(req,res)=>{
	console.log("from students route")
	res.json(students)
})

app.listen(port,()=>console.log("Nee abba codered raa",port))
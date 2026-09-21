
const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="Get"){
        res.write("Hello world\n")
        res.write("Chitkara World \n")
        res.end("Welcome to HomePage")
        res.write("Trying new line")
    }
    else if(req.url=="/about"){
        res.end("Welcome to about Page")
    }else if(req.url=="/cart"){
        res.end("Welcome to cart page")
    }
    else if(req.url=="/product"){
        res.end("Welcome to Product Page")
    }
})

server.listen(8080,()=>{
    console.log("Server is started in http://localhost:8080/")
})
// 8080, 5000, 8000


// npm ==> node package manager ==> 
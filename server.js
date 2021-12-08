const express = require('express');
const date = require(__dirname+'/getDate.js');

const app = express();
app.use(express.static('public'));

app.get('/',(request,response)=>{
    response.send('hello comrad, we have been expecting you');
});

app.get('/getdate',(req,res)=> {
    let today = date.getDate();
    res.send(today);
});

port = 3000;
app.listen(port,()=> {
    console.log(`Server is running on port ${port}.`);
});

app.get('/getweekday',(req,res)=> {
    let today = date.getweekday();
    res.send(today);
});

app.get('*',(req,res) => {
    res.sendFile(__dirname+'/404.html');
});
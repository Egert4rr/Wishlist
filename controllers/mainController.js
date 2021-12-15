const date = require('../getDate.js');
const Wish = require('../models/wish')

exports.getMainPage = (request,response)=>{
    Wish.fetchWishes(wishes =>{
        console.log(wishes);

        let today = date.getDate();

        response.render('index',{dateToRender: today, myWishes: wishes});
    })
}

exports.getdate = (req,res)=> {
    let today = date.getDate();
    res.send(today);
}

exports.getweekday = (req,res)=> {
    let today = date.getweekday();
    res.send(today);
}

exports.postWish = (req, res) => {
    console.log(req.body.userWish);
    const newWish = new Wish(req.body.userWish, req.file.filename)
    newWish.saveWish()

    res.redirect('/')
}

exports.deleteWish = (req, res) => {
    let wishToDelete = req.body.wishToDelete

    Wish.deleteWish(wishToDelete)
    res.redirect('/')
}
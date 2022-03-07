const moment =require('moment')
const createUser= function (req, res,next){
    const ipAdd=req.ip
    
    const dateFormat = "YYYY-MM-DD HH:mm:ss"
    const newDate = new Date()
    date = moment(newDate).format(dateFormat);
    console.log("After Middleware hit",date,"\n",ipAdd)
    res.send("After Middleware hit")
    next()
}

const basicAPi= function (req, res){
    res.send("basicAPi is hit")
}

module.exports.createUser=createUser
module.exports.basicAPi=basicAPi
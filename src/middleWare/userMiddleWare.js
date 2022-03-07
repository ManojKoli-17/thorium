
const mid1=function(req,res,next){
    console.log("middleware is hit")
    next();
}




module.exports.mid1=mid1
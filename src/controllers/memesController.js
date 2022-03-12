let axios = require("axios")

let getMemesById = async function (req, res) {
    try {
        let template_id=req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1




        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`

        }
        let result = await axios(options)
        res.status(200).send(result.data )
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getMemesById=getMemesById
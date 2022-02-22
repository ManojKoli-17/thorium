function trim(){
    let demoString1 = "      Manoj                "
    console.log(demoString1.trim())
}
function changetoLowerCase(){
    let demoString2 = "Manoj Koli"
    console.log(demoString2.toLowerCase())
}
function changetoUpperCase(){
    let demoString3 = "Manoj Koli"
    console.log(demoString3.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase
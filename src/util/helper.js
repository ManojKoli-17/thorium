function printDates(){
    let date = new Date();
    console.log("Date:  " + date.getDate())
  }
  function printMonths(){
    let month = new Date();
    console.log("Month:  " + (month.getMonth()+1))
  }

  function getBatchInfo(){
      let todaysTopics = "Thorium, W3D1, the topic for today is Nodejs module system, what is npm, use of npm, Overview of Node js, Node module, What is package.json, How to install package in node js using npm, How to import, export local files in our project and use them, What is require method in node, Overview of routes in js, Overview of res, req in node How to start our local server"

      console.log(todaysTopics)
  }

  module.exports.printDates = printDates
  module.exports.printMonths = printMonths
  module.exports.getBatchInfo = getBatchInfo
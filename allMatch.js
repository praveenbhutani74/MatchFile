const request=require('request');
const cheerio=require('cheerio');
const Allmatches = require('./match');


function allMatches(Mlink){
    request(Mlink,function(err,res,data){
        processData(data);

    })

    function processData(data){
      let Doc=cheerio.load(data);
      let AllLinks=Doc('a[data-hover="Scorecard"]')
        console.log(AllLinks.length);
        for(let i=0;i<AllLinks.length;i++){
            let matchLink="https://www.espncricinfo.com"+Doc(AllLinks[i]).attr("href");
         Allmatches(matchLink);
        }

    }


}
module.exports=allMatches;
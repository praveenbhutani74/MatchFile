const request=require('request');
const cheerio=require('cheerio');
const allMatches=require('./allMatch');
let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595";


request(matchLink,function(error,response,data){


   processData(data);
})


function processData(data){

let Doc=cheerio.load(data);
let Match=Doc(".widget-items.cta-link a");
let Mlink="https://www.espncricinfo.com/"+Match[0].attribs.href;
allMatches(Mlink);


}



var requestflag = new XMLHttpRequest();
let flag={};
requestflag.open("GET","https://restcountries.com/v2/all?fields=flags");
requestflag.send();
requestflag.onload=function(){
    flag = requestflag.response;
    flag = JSON.parse(flag);
    
    for(let i in Object.keys(flag)){
        console.log(flag[i].flags.png);
    }
};
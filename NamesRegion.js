
var request = new XMLHttpRequest();
let result={};
request.open("GET","https://restcountries.com/v2/all?fields=name,region,subregion,population");
request.send();
request.onload=function(){
    result = request.response;
    result=JSON.parse(request.response);
    
    for(let i in Object.keys(result)){
        console.log("Name : ",result[i].name,", Region : ",result[i].region,", Subregion : ",result[i].subregion,", Population : ",result[i].population);
    }
};
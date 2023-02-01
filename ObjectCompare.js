let a = {name:"Person1",age:5};
let b = {age:5,name:"Person1"};
//let len = Object.keys(b);
let x = "Objects have same properties";
for(var i of Object.keys(b))
{   
    if(a[i]!=b[i])
    {
      x = "Objects does not have same properties";
    }
}
console.log(x);
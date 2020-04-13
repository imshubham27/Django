x=0;
while(x<11){
    if(x%2===0){
        console.log(x);
    }
    x++;
}
flag=0;
var a,b,c,d,e;
a=prompt("Enter your first name: ");
b=prompt("Enter your last name: ")
c=prompt("AGE");
d=prompt("Height");
e=prompt("Pet name: ");
f=e.length;
if(a[0]===b[0] && (c<30 && c>20) && d>=170 && e[f-1]==="y"){
    console.log("You are a spy");
}
function makeBricks(small, big, goal){
    if(small*1 + big*5 === goal){
      return true;
    }else{
      return false;
    }
  }

var a= prompt("Enter small number: ");
var b= prompt("Enter big number: ");
var c=prompt("Enter goal: ");

console.log(makeBricks(a,b,c));

function multiple(...args){
  console.log(args)
}

a=[1,2,3,4,5]
multiple(1,2,3,4,5);

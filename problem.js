// //swap using js
// let a=5;
// let b=6;
// console.log('a=',a,'b=',b);
// let c=a;
// a=b;
// b=c;
// console.log('a=',a,'b=',b);
// console.log('a=',a,'b=',b);

// let p=5;
// let q=6;

// [p,q] = [q,p];
// console.log(p,q);

//random number

// let randomNumber =  Math.random()*500;
// let result = Math.round(randomNumber);
// console.log(result);

// let a= 300;
// let b= 200;
// let c= 300

// if (a>b && a>c){
//     console.log('a big');
// }
// else if (b>a && b>c){
//     console.log('b is big')
// }
// else {
//     console.log('c is big');
// }
// js function
// let a=100;
// b=300;
// c=400;
// let max= Math.max(a,b,c);
// console.log(max);

let marks=[33,55,66,77,88,23,90];
let max =marks[0];

for (let i=0; i<marks.length; i++){
    let check= marks[i];
    if(check>max)
    {
        max=check;
    }
}
console.log(max);

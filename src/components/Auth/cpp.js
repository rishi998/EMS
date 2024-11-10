// var str="Hi my name is Rishi";
// var saved_str=str.split(" ").map(function(word){
//   return word.split('').reverse().join('')
// })

// // console.log(saved_str.join(' '));
// var new_str="Rishi";
// var reversed=new_str.split('').reverse().join('');
// console.log(reversed)

// function Checkarr(elem){
  // the below function is used to check if an element is array or not
//   return Array.isArray(elem)
// } 
// console.log(Checkarr([]))
// console.log(Checkarr({}))


// empty an array in javascript.
// var arr=[1,2,3,4,5,6,7];
// console.log(arr.length)
// arr.length=0;
// console.log(arr)

// how would you check if some number is integer or not
// var num=2;
// console.log(Number.isInteger(num))
// function checkint(num){
//   if(num%1==0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(checkint(12))


// function to reverse a number;
// function revnum(num){
//   var n=0;
//   while(num!=0){
//     var digit=num%10;
//     n=n*10+digit;
//     num=Math.floor(num/10);
//   }
//   return n;
// }
// function revnum2(num){
//   var n =Number(num.toString().split('').reverse().join(''))
//   return n
// }
// console.log(revnum2(8210))

// write a function to chekc if a passed number is palindrome or not
// function checkpalindrome(str){
//   var new_str=str.split('').reverse().join('');
//   return new_str==str
// }
// console.log(checkpalindrome('mamtatmam'))


// write a function to sort a string in alphabetical order
// function sortstr(str){
//   return str.split('').sort().join('');
// }
// console.log(sortstr('tcsprime'))

// change to uppercase of first letter of each word of a string
// function changecase(str){
//   var new_str=str.split(' ').map(function(word){
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(' ');
//   return new_str;
// }

// console.log(changecase('Hi this is rishi'))
// var saved_str=str.split(" ").map(function(word){
//   return word.split('').reverse().join('')
// })

// get the number of occurences of each letter in the string
// function checkoccurences(str){
//   var occurences={};
//   str.split('').forEach(function(elem){
//     if(occurences.hasOwnProperty(elem)===true){
//       occurences[elem]+=1;
//     }
//     else{
//       occurences[elem]=1;
//     }
//   })
//   return occurences;
// }

// console.log(checkoccurences('rishimehto'))

// loop an array and add all members of it
// var l=[1,2,3,4,5,6,7,8,9,10];
// var sum=0;
// var new_l=l.forEach(function(elem){
//   sum+=elem;
// })
// console.log(sum)


// in an arrya of strings and numbers only add those number swhich are not strings
// var arr=[1,2,'maggie', 3,'pizza',4,5,6,'chocolate',7,8,9,10];
// var sum=0;
// arr.forEach(function(elem){
//   if(Number.isInteger(elem)) sum+=elem;
// })
// console.log(sum)

// loop an array of objects and remove all objects which don't have gender's value male
// var arr=[
//   {name : 'rishi',gender:'male'},
//   {name : 'r2',gender:'female'},
//   {name : 'r3',gender:'male'},
//   {name : 'r4',gender:'female'},
//   {name : 'r5',gender:'male'}
// ]
// method 1
// var newarr=arr.filter(function(elem){
//   return elem.gender==='male'
// })
// console.log(newarr)

// method 2
// var count=0;
// arr.forEach(function(elem){
//   if(elem.gender!='male') count++;
// })

// for(var k=1;k<count;k++){
//   for(var i=0;i<arr.length;i++){
//     if(arr[i].gender!=='male') arr.splice(i,1);
//   }
// }
// console.log(arr)


// clone an array into a new array
// function clonearr(arr){
//   return [0,...arr]
// }

// console.log(clonearr([1,2,3,4]))

// typeof
// function typeteller(elem){
//   return typeof(elem);
// }
// console.log(typeteller([]))
// console.log(typeteller(12))
// console.log(typeteller('12'))
// console.log(typeteller(true))
// console.log(typeteller(undefined))
// console.log(typeteller(function(){}))
// console.log(typeteller([])) 

// function to print most frequent  element of array
// var arr=[1,2,3,4,4,4,5,5,6,7]
// var obj={}
// arr.forEach(function(elem){
//   if(obj.hasOwnProperty(elem)===true) obj[elem]+=1;
//   else obj[elem]=1;
// })
// var maxel=-Infinity;
// var maxkey=null;

// for(var key in obj){
//   if(obj[key]>maxel) maxel=key
// }
// console.log(maxel)


function shuffleit(arr){
  for(var i=arr.length-1;i>=0;i--){
    var j=Math.floor(Math.random()*(i+1))
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    // [arr[i],arr[j]]=[arr[j],arr[i]]
  }
  return arr;
}

console.log(shuffleit([1,2,3,4,5,6,8,10]))
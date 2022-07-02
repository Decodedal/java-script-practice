// function first(){
//     setTimeout(()=>{
//     console.log("First")
// },3000);
// }

// function second(){
//     setTimeout(()=>{
//     console.log("second")
// },6000)
// }

// function third(){
//     console.log("Third")
// }

// first()
// second()
// third()


// let promise = new Promise((resolve,reject)=>{
//         //statment
//         let a = 2+3 
//        if( a == 3){
//         resolve("Success")
//        }else{
//         reject("Failed")
//        }
// });


// promise
// //success?
// .then((message)=>{
//       console.log(message)
// })
// //error?
// .catch((message)=>{
//     console.log(message)
// })

//regular promise
// const doSomethingPromise = () =>{
//        return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve('Do Something')
//         },3000);
//        });

// }
// doSomethingAsync()

// async function doSomethingAsync(){
//     setTimeout(()=>{
//         resolve()
//     },5000)
//     return 
    
// }
// function sumArray(array) {
//     let sorted = array.sort((a,b)=>{
//      return a - b
//     })
//     sorted.pop();
//     sorted.shift();
//     return sorted.reduce((a,b)=>{
//       return a+b
//     },0)  
//     }

//    console.log(sumArray([ 6, 2, 1, 8, 10 ]))

function oneToOneHundred(){
  let arr = []
  for (let i = 0; i<100; i++){
    if(i%3 == 0 && i%5 == 0 && i!==0){
      arr.push('FizzBuzz')
    }else if(i%3 == 0 && i!==0){
      arr.push('Fizz')
    }else if(i%5 == 0 && i!==0){
      arr.push('Buzz')
    }else{
      arr.push(i)
    }
  }
  return arr
}

console.log(oneToOneHundred())
// let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
// let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
// let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

// lorrieCount = 0 
// let typeS1Count=0
// let i = 0; 
// while(i<newInventoryCarModels.length){
//     console.log(newInventoryCarModels[i])
//     if (newInventoryCarModels[i]=="S1"){
//         typeS1Count++
//     }
//     i++
// }
// console.log(typeS1Count)

// for(let car in newInventoryCarTypes){
//     if (newInventoryCarTypes[car]=="Lorrie"){
//         lorrieCount++
//     }
// }
// console.log(lorrieCount)

// let avg = 0 
// let sum = 0 
// for (let year in newInventoryYearBuilt){
//     sum += newInventoryYearBuilt[year];
// }
// avg = sum/ newInventoryYearBuilt.length
// console.log(avg)



// function greetUser(obj({a,b}){
//     console.log(`Welcome, ${firstName} ${lastName}!`)
// }

// const erica = {
//     firstName: 'Erica',
//     lastName: 'Mills'
// }

// // Instead of calling greetUser like this:
// greetUser(erica.firstName, erica.lastName)

// function profit(x,y){
//     let sumP = 0 
//     let sumE = 0 
//     for(let num in x){
//         sumP += x[num]  
//     }
//     for (let boo in y){
//         sumE += y[boo]  
//     }
//        return sumP - sumE
//   }
  
//  console.log(profit([ 516000, 30000, 24000], [ 100000, 2800 ]))
// arr=[1,2,3,4,5]
// for (let num in arr){
//     console.log(num)
// }
// function sum(num, num2){
//     return num + num2
//   }
 
//  let a = 10
//  let b = 5
//  let c = 6
//  let d = 4
//  let result = sum(a,b) + sum(c,d)
//  console.log(result)

//let arr=[10,5,6,4]
//  let result = 0
//  let a = 10
//  let b = 5
//  let c = 6
//  let d = 4
// for (let num in arr){
//   result+= arr[num]
// }
// console.log(result)

// function calculator(num,num2,callback){
//      return callback(num,num2)
// }

// function add(a,b){
//    return a+b
// }
// function subtract(a,b){
//     return a-b
// }
// function multipy(a,b){
//     return a*b
// }
// function divide(a,b){
//     return a/b
// }

// console.log(calculator(10,5,multipy))

// function threeTimes(doIt){
//     return doIt(),doIt(),doIt()
  
//  }
 
//  threeTimes(function(){
//      console.log('Hello World!')
//  })


// function forEach(elements, callback){
//     for(let i = 0; i < elements.length; i++){
//        callback(elements[i])
//     }
// }

// let numbers = [ 500, 80, 20 ]
// let total = 900000000000000
// forEach(numbers, function(number){
//     total/= number
// })
// console.log(total)
// function more(a,b){
//    return a>b?"number one is greater":"number2 is greater"
// }

// function print(a,b,callback){
//     console.log(callback(a,b))
// }

// console.log(print(22,5))
// function isOdd(n){
//     return n % 2 == 0 ? false : true
// }
// console.log(isOdd(4))
// console.log(isOdd(5))

// let exclaim = (string) => `${string}!`

// console.log(exclaim('adrian'))
// console.log(exclaim(exclaim('adrian')))

// const doubleChars = str => str.split("").map(c => `${c}${c}`).join('');

// console.log(doubleChars('Adrian'))
// console.log(doubleChars('ssssnake'))

// let double = arr =>arr.map(c =>`${c} ${c}`)

// let arr = [1,5,2,7];

// let foo = ['apple','bee','cat','dog'];

// console.log(double(arr))
// console.log(double(foo))
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

// function sum(num, num2){
//     return num + num2
//   }
  
//   let a = 10
//   let b = 5
//   let c = 6
//   let d = 4
  
//   let result = sum(a,b) + sum(c,d)
//   console.log(result)

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
arr=[1,2,3,4,5]
for (let num in arr){
    console.log(num)
}

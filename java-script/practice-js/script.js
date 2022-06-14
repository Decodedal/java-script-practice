let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

lorrieCount = 0 
let typeS1Count=0
let i = 0; 
while(i<newInventoryCarModels.length){
    console.log(newInventoryCarModels[i])
    if (newInventoryCarModels[i]=="S1"){
        typeS1Count++
    }
    i++
}
console.log(typeS1Count)

for(let car in newInventoryCarTypes){
    if (newInventoryCarTypes[car]=="Lorrie"){
        lorrieCount++
    }
}
console.log(lorrieCount)

let avg = 0 
let sum = 0 
for (let year in newInventoryYearBuilt){
    sum += newInventoryYearBuilt[year];
}
avg = sum/ newInventoryYearBuilt.length
console.log(avg)
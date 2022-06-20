// let companies=[
// {name:"company two", category:"Retail", start:1992,end:2008},
// {name:"company three", category:"Auto", start:1999,end:2007},
// {name:"company four", category:"Retail", start:1989,end:2010},
// {name:"company five", category:"Technology", start:2009,end:2014},
// {name:"company six", category:"Finance", start:1987,end:2010},
// {name:"company seven", category:"Auto", start:1986,end:1996},
// {name:"company eight", category:"Technology", start:2011,end:2016},
// {name:"company nine", category:"Retail", start:1981,end:1989}
// ];

// const ages =[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// // console.log(ages.filter(age => age >21))
// // const retailCompanies = companies.filter(company => company.category =="Retail")

// // console.log(retailCompanies)

// // const eightysCompanies = companies.filter(company => company.start >= 1980 && company.start<1990)

// // console.log(eightysCompanies)

// // const lastedTenYears = companies.filter(age => age.end - age.start >= 10)

// // console.log(lastedTenYears)

// // const ageCubed = ages.map(age => age**3)

// // console.log(ageCubed)

// // const sortedCompanies = companies.sort((c1,c2) => c1.start > c2.start ? 1:-1)
// //      console.log(sortedCompanies)


// // let selectedMonths = [ 
// //      { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
// //      { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
// //      { name: 'March', revenue: 15, expenses: 3, quarter: 1 } 
// //  ]
 
// //  let monthlyProfitLabels = selectedMonths.map(month => `${month.name}:${month.revenue - month.expenses}`); // <-- replace null
 
// //  console.log(monthlyProfitLabels);

// function hashtagGenerator(str){
//      let capital = " "  
//      str == "" || str.length > 140 ? false :
//      capital = str
//        str.toLowerCase()
//        .split(' ')
//        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//        .join('');
     
//    return` #${capital}`;
// }
// console.log(hashtagGenerator(""))

//      str == "" || str.length > 140 ? false :
//      capital = str

let users = [
     { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
     { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
     { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
     { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
 ]
 
// function getFirstNames(users){
//      return users.map((user)=>{
//      return user.firstName +" "+ user.lastName
//  })
// }
 
//  console.log(getFirstNames(users))

 function getTeenagers(users){
       return  users.filter(old => { 
       return  old.age <= 18 && old.age >= 13
     })
}

console.log(getTeenagers(users))
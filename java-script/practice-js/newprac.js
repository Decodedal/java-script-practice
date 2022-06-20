let companies=[
{name:"company two", category:"Retail", start:1992,end:2008},
{name:"company three", category:"Auto", start:1999,end:2007},
{name:"company four", category:"Retail", start:1989,end:2010},
{name:"company five", category:"Technology", start:2009,end:2014},
{name:"company six", category:"Finance", start:1987,end:2010},
{name:"company seven", category:"Auto", start:1986,end:1996},
{name:"company eight", category:"Technology", start:2011,end:2016},
{name:"company nine", category:"Retail", start:1981,end:1989}
];

const ages =[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// console.log(ages.filter(age => age >21))
const retailCompanies = companies.filter(company => company.category =="Retail")

console.log(retailCompanies)
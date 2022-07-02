// class Vehicle{
//     constructor(weight,numberOfDoors,model,allWheelDrive,tint){
//     this.weight = weight;
//     this.numberOfDoors = numberOfDoors;
//     this.model =model;
//     this.allWheelDrive= allWheelDrive;
//     this.tint = tint;
//     }
//     oversizedload(){
//         this.weight > 4000 ? console.log(true) : console.log(false);
//     }
   
//     streetlegal(){
//         this.tint > .5 ? console.log("illigal tint"): console.log("Street Legal")
//     }
//     allTerrain(){
//         this.allWheelDrive == true && this.model == "truck" ? console.log(true) : console.log(false);
//     }

// }

// let ford = new Vehicle(5000 , 2, "truck", true, 0.2)
// ford.oversizedload()
// ford.allTerrain()
// ford.streetlegal()


class Car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year
    }
    getlog(){
        console.log(`name:${this.name}  model:${this.model}  year:${this.year}`);
    }
    addColor(color){
    console.log(`color:${color}`)
}
}
let Mazda = new Car("Cx30","Crossover","2022");
let Color = Mazda.addColor("Black");
Mazda.getlog(this.model);
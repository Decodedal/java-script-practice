class Vehicle{
    constructor(weight,numberOfDoors,model,allWheelDrive,tint){
    this.weight = weight;
    this.numberOfDoors = numberOfDoors;
    this.model =model;
    this.allWheelDrive= allWheelDrive;
    this.tint = tint;
    }
    oversizedload(){
        this.weight > 4000 ? console.log(true) : console.log(false);
    }
   
    streetlegal(){
        this.tint > .5 ? console.log("illigal tint"): console.log("Street Legal")
    }
    allTerrain(){
        this.allWheelDrive == true && this.model == "truck" ? console.log(true) : console.log(false);
    }

}

let ford = new Vehicle(5000 , 2, "truck", true, 0.2)
ford.oversizedload()
ford.allTerrain()
ford.streetlegal()
/*
<<<< Task No: 23 >>>>
Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and 
your prediction for the results of each test. 
*/


type Car = {
    brand: string;
    model: string;
    year: number;
    color: string;
    isAutomatic: boolean;
    mileage: number;
    fuelType: 'gasoline' | 'diesel' | 'electric';
    topSpeed: number;
    price: number;
    owner: string;
  }
  
  const vehicle: Car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
    isAutomatic: true,
    mileage: 5000,
    fuelType: 'gasoline',
    topSpeed: 150,
    price: 25000,
    owner: 'Michel Angelo',
  };



// 1: Vehicle Brand
console.log(`\nI predict vehicle brand is Toyota`);
console.log(vehicle.brand === 'Toyota');

// 2: Vehicle Model
console.log(`\nI predict vehicle model is Camry`);
console.log(vehicle.model === 'Camry');

// 3: Vehicle Model Year
console.log(`\nI predict vehicle model year is 2020`);
console.log(vehicle.year === 2020);

// 4: Vehicle Color
console.log(`\nI predict vehicle color is White`);
console.log(vehicle.color === 'White');

// 5: Vehicle AutoFeature
console.log(`\nI predict vehicle is Auto`);
console.log(vehicle.isAutomatic === true);

// 6: Vehicle Millage
console.log(`\nI predict vehicle millage is 4500`);
console.log(vehicle.mileage === 4500);

// 7: Vehicle Fueltype
console.log(`\nI predict vehicle is Electrical`);
console.log(vehicle.fuelType === "electric");

// 8: Vehicle Top Speed
console.log(`\nI predict vehicle Top Speed is 150 mph`);
console.log(vehicle.topSpeed === 150);

// 9: Vehicle Price
console.log(`\nI predict vehicle Price is $ 30,000`);
console.log(vehicle.price === 30000);

// 10: Vehicle Ownwer
console.log(`\nI Bet vehicle Owner is Michel Angelo `);
console.log(vehicle.owner === 'Michel Angelo');


  

/*
<<<<< Task No: 44 >>>>>
Cars: 
Write a function that stores information about a carInfo in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other 
name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information 
was stored correctly.
*/

// Car
function carInfo (
    manufacturer:string, 
    modelName:string, 
    ...moreInfo: unknown[]
):object {
    const features = {manufacturer, modelName};
    moreInfo.forEach((feature, index, morefeatures) => {
        Object.assign(features, morefeatures[index])
    })
    return features;
}

// Declare car 1
const car1 = 
carInfo ('nissan', 'altima', {color: 'white'}, {automatic: true});
// Print
console.log(car1);

// Declare Car 2
const car2 = 
carInfo ('toyota', 'camry', {color: 'red'}, {automatic: true}, {sunroof: true});
// Print 
console.log(car2);

// Declare Car 3
const car3 = 
carInfo (
    'tesla', 'model 3', {color: 'gray'}, 
    {AI: true}, {sunroof: true},
    {camera: true}, {electrical: true}
)
// Print
console.log(car3);
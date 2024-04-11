"use strict";
/*
<<<<< Task No: 44 >>>>>

# Cars:
> Write a function that stores information about a carInfo in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other
name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information
was stored correctly.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function
function cars(manufacturer, model, ...moreinfo) {
    const carInfo = { manufacturer, model };
    moreinfo.forEach(info => Object.assign(carInfo, info));
    console.table(carInfo);
}
// Call Function
cars('Tesla', 'Model 3', { color: 'Black' }, { feature: 'Autopilot' });

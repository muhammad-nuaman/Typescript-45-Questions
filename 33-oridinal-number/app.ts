/*
<<<< Task No: 33 >>>>
Ordinal Numbers: 
Ordinal numbers indicate their position in a array, 
such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
*/


const ordinalNumbers: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinalNumbers.forEach((num, i, arr) => {
    // First Way
    if      (num === 1) arr[i] = `${num}st`;
    else if (num === 2) arr[i] = `${num}nd`;
    else if (num === 3) arr[i] = `${num}rd`;
    else                arr[i] = `${num}th`;

    // Second Way
    // switch(num) {
    //     case 1:  arr[i] = `${num}st`; break;
    //     case 2:  arr[i] = `${num}nd`; break;
    //     case 3:  arr[i] = `${num}rd`; break;
    //     default: arr[i] = `${num}th`;
    // }

    // Print Array
    console.log(`${ordinalNumbers[i]} Position`);
});


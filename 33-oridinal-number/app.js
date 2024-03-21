/*
<<<< Task No: 33 >>>>
Ordinal Numbers:
Ordinal numbers indicate their position in a array,
such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
*/
let ordinalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinalNums.forEach((num, i, arr) => {
    switch (num) {
        case 1:
            arr[i] = `${num}st`;
            break;
        case 2:
            arr[i] = `${num}nd`;
            break;
        case 3:
            arr[i] = `${num}rd`;
            break;
        default: arr[i] = `${num}th`;
    }
    console.log(ordinalNums[i]);
});
export {};

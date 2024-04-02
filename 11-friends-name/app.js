"use strict";
/*
<<<< Task No: 11 >>>>
Names: Store the names of a few of your friends in a
array called names. Print each person’s name by
accessing each element in the list, one at a time.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Friends Name
const friends_1 = __importDefault(require("../modules/friends"));
// Print Friends Name
console.group('My Friends Name: ');
friends_1.default.forEach((name, index) => console.log(`${(++index)}: ${name}`));
console.groupEnd();

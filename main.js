"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeGreat(magician) {
    for (let magic of magician) {
        console.log(`Great magicion: ${magic}`);
    }
}
let magicians = ['Harry Houdini', 'Criss Angel ', 'Penn Jillette'];
makeGreat(magicians);
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
showMagicians(magicians);

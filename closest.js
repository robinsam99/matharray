
let x = 3;
let array = [5, 10, 15, 20, 25, 30, 35];
let closest = array.sort( (a, b) => Math.abs(x - a) - Math.abs(x - b) )[0];

document.getElementById("dem").innerHTML = closest;
const muliplier= 100;
function rand (word) {
    const decimal = Math.random(); // between 0 and 1
    const times10 = decimal * muliplier;
    const final = Math.floor(times10);
    return final + word; // my fucntion is gonna have a output 
}

console.log(rand(" times"));

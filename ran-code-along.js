const muliplier= 100;
function rand(){
    const decimal = Math.random();
    const times10 = decimal * muliplier;
    const final = Math.floor(times10);
    return final
}

console.log(rand());

function circle(r) {
    if (r < 0){
        throw new Error
    }
    return Math.PI * r * r;

}
console.log(`${circle} = ${circle.toFixed(2)}`)
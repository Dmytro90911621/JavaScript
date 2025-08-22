function cylinder(h , r) {
    if (r < 0 || h < 0) {
        throw new Error;
    }
    return 2 * Math.PI * r * (r + h);
}
let radius = 4;
let height = 10;

let surfaceArea = cylinder(radius, height);
console.log(` ${surfaceArea.toFixed(2)}`);
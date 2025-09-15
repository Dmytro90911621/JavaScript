function* adidas(){
    const names = [
        {date:1 , lesson:'good'},
        {date:2 , lesson:'good'},
        {date:3 , lesson:'good'},
        {date:4 , lesson:'good'},
    ]
for (const name of names ){
    yield name;
    }
}
let a = adidas()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
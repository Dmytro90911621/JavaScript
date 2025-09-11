function dimaBuilder(name,age){
    let dima = {name:'Dima', age:35};
        return {
        getName(){
            return dima.name;
        },
        getAge(){
            return dima.age;
        },
            setAge(age){            // - дозволяє вносити зміни в дані.
            if(age > 0){
                dima.age = age;
            }
            }
    }
}
let builder = dimaBuilder('dima' , 35);
console.log(builder);
console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(36);
console.log(builder.getAge());
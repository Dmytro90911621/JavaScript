let str='hello okten';
console.log(str);

console.log(str[0]);

let s = str.concat('!!!');/// додає символи до обєкту
console.log(s);

console.log(str.toUpperCase());/// переводить до верхнього регістру (з великої літери)

console.log(str.toLowerCase());/// переводить до нижнього регістру

console.log(str.startsWith('hello')); /// передає сигвенцію символів з якої може починатись наша стрінга якщо вона існує то буде значення /true/

console.log(str.endsWith('ten'));/// передає сигвенцію символів з якої може закінчуватись наша стрінга якщо вона існує то буде значення /true/

console.log(str.substring(0,7));/// обрізає починаючи з 0 по 7( 7 не входить)

console.log(str.indexOf('e'));///дозволяє дізнатись під яким індексом знаходиться літера (з ліва на право)

console.log(str.lastIndexOf('k'));///аналогічно тільки з права на ліво

console.log(str.indexOf('e', 8));/// знаходить цю літеру до 8 символу

console.log(str.charAt(8));///дозволяє повернути за певним індексом літеру

console.log(str.replace('e','!'));///дозволяє замінити символ але тільки перше входження

console.log(str.replaceAll('e','!'));/// дозволяю замінити всі символи

console.log(str.split('  '));///розподіляє на частини
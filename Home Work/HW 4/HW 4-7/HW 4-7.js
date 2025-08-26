//– створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим(тут використовувати цикл) та виводить його через document.write

function solve(text,next) {
    document.write(`<ul>`)
             for (let i = 0; i < next; i++) {
                  document.write(`<li>${text}</li>`);}
    document.write(`</ul>`);
    }
    solve('Dima', 35);
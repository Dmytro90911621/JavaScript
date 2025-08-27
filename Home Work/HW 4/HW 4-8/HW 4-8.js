//– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function masiv(aray) {

    document.write(`<ul>`)

       for( const item of aray ) {
           document.write(`<li>${item}</li>`)
       }
    document.write(`</ul>`)

}
masiv([1,2, 3, 'ergerg', true, 'eg'])

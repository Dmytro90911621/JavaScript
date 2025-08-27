//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

//Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400



function exchange(sumUAH, currencyValues, exchangeCurrency) {

    const currency = currencyValues.find(c => c.currency === exchangeCurrency);


    if (!currency) {
        console.error("Валюта не знайдена");
        return null;
    }


    return sumUAH / currency.value;
}
const result = exchange(
    10000,
    [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}],
    'USD'
);

console.log(result); // => 400
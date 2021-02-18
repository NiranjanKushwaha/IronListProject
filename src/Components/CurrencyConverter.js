export const currencyConverter = (currencyName, amount) => {
    let res = fetch(`https://free.currconv.com/api/v7/convert?q=INR_${currencyName}&compact=ultra&apiKey=64bfcba7e8fbd814cbfa`)
        .then(res => res.json()).then(data => {
            let result = amount * data[`INR_${currencyName}`];
            return result;
            // console.log(result);
        }).catch(err => console.log(err));
    
    return res;
}
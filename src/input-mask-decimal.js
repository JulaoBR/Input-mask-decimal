function calcZero(length, decimal, value)
{
    let zero = '';
    for (let i = 0; i < Number(decimal) - Number(length); i++) {
        zero += '0';
    }
    
    return `0,${zero}${value}`;
}

function onlyNumber(length, value)
{
    let a = 2;
    let c = 0;
    let n = '__0123456789';
    let s = '';
    for (i = 0; i < length; i++) {
        c = value.charAt(i);
        if (n.indexOf(c) > a) {
            a = 1;
            s += c;
        };
    };
    return s;
}

function calcPoint(decimal, length, value)
{
    let currency = '';
    let cont = 0;
    let limit = 3 + decimal;
    for (i = length; i >= 0; i--) {
        cont++;
       
        if (cont > limit) {
            currency = `${value[i]}${currency}`;

            if (length >= cont)
                currency = `.${currency}`

            limit += 3;
        } else 
            currency = `${value[i]}${currency}`;
    }

    return currency;
}

function inputMask(element, len = 10, decimal = 2)
{
    let value = element.value;
    let length = value.length;

    console.clear()

    value = onlyNumber(length, value);

    length = value.length;
    if (length > decimal) 
        value = `${value.substr(0, length - decimal)},${value.substr(length - decimal, decimal)}`;
    else 
        value = calcZero(length, decimal, value);

    length = value.length - 1;

    element.value = calcPoint(decimal, length, value);
}
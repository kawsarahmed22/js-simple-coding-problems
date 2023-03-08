function add(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please type a valid number'
    }
return num1 + num2;
}

console.log(add('5', 10));

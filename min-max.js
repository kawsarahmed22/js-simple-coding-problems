function maxNumber (n1, n2, n3){
    const maxNumber = Math.max(n1, n2, n3);
    return maxNumber;
}
console.log(maxNumber(502,2,3322));


function minNumber (n1, n2, n3){
    const minNumber = Math.min(n1, n2, n3);
    return minNumber;
}
console.log(minNumber(502,2,3322));

const tamim = 100;
const mushfiq = 99;
const miraj = 98;

if (tamim > mushfiq && tamim > miraj){
    console.log('Tamim is best');
}
else if (mushfiq > tamim && mushfiq > miraj){
    console.log('Mushfiq is best');
}
else{
    console.log('Miraj is best');
}
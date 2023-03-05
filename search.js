const nationalAnthem = 'Amar sunar bangla ami tumay valobasi cirodin tumar akash tumar batash amar prane bajay bashi sunar bangla ami tumay valobashi'


const doesExist = nationalAnthem.includes('sunar');
const indexOfSunar = nationalAnthem.indexOf('sunar')

// -1 mane holo jokon kunu kicu takbe na
// !== -1 mane holo jokon kunu kichu thakbe

if(nationalAnthem.indexOf('bangla') !== -1){
    console.log('1');
}
else{
    console.log('2');
}


console.log(nationalAnthem.endsWith('Amar'))

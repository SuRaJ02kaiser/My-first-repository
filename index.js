arr=[1,2,3,4,5,6,7,8,9]

for (let j=0; j <= arr.length; j++) {
    let pattern = '';
    for (let k = 1; k <= j ; k++) {
        pattern += '* ';
    }
    console.log(pattern);
}



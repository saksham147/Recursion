function fibs(n){
    if (n === 1) {
        return [0];
    }else if (n === 2){
        return [0,1];
    } 

    const x=[0,1];

    for (i=2; i<n; i++){
        x[i] = x[i-1]+x[i-2];
    }

    return x;
}

function fibsRec(n){
    if (n === 1){
        return [0];
    }else if (n === 2){
        return [0,1];
    }

    return [...fibsRec(n-1), fibsRec(n-1)[n - 2] + fibsRec(n-1)[n - 3]];
}

console.log(fibs(8));
console.log(fibsRec(8));
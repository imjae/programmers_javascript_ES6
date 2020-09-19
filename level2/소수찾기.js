
var answer = [];

function solution(numbers) {
    permutation(numbers.split(''), '');

    let resultSet = new Set(answer);
    console.log(resultSet.size);
    return resultSet.size;
}

function permutation(arr, str) {
    if(isPrime(parseInt(str))) {
        if(str.substr(0,1) != 0) answer.push(parseInt(str));
    }

    if (arr.length > 0) {
        for (var i = 0; i< arr.length; i++) {
            var text = arr.slice(0);
            text.splice(i,1);
            // console.log(str + arr[i]);
            permutation(text, str + arr[i]);
        }
    }
}

function isPrime(num) {
    if(typeof num != 'number') return false;
    if(num == 2) return true;
    if(num == 1) return false;
    // console.log(num);
    for(let i=2; i<=num/2; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

solution("011");
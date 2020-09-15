

function solution(n) {
    var answer = '';
    answer = sol(n, answer).split('').reverse().join('');

    return answer;
}

function sol(n, answer) {
    if(n === 0) return answer;

    let namuji = n%3;
    let mok = parseInt(n/3);

    if( namuji === 0) {
        return sol(mok-1, answer + '4');
    } else {
        return sol(mok, answer + namuji);
    }
}

console.log(solution(14));
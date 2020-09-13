function solution(w, h) {
  var answer = 1;

  var gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  answer = w * h - (w + h - gcd(w, h));

  return answer;
}

// function gcd(a,b) {
//     if (b>a) {
//         let tmp = b;
//         b = a;
//         a = tmp;
//     }
//     if (b == 0) {
//         return a;
//     }

//     if (a%b == 0) {
//         return b;
//     } else {
//         return gcd(b, a%b);
//     }
// }

console.log(solution(8, 12));

var A = (a, b) => (a ? A(b % a, a) : b),
  solution = (w, h) => w * h - (w + h - A(w, h));

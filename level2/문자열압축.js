function solution(s) {
    var answer = [];
    var len = s.length;
    if (s.length < 3) return s.length;

    for (let i=1; i<=len/2; i++) {
        let cnt = 1;
        // 몇 글자로 나눌지 정해주는 반복문
        let splicedArr = spliceArr(s, i);
        let resultArr = [];
        console.log("@@@@@splicedArr : " +splicedArr);
        for(let j=0; j<splicedArr.length-1; j++) {
            let resultStr = '';
            if(splicedArr[j] === splicedArr[j+1]) {
                resultArr.pop();
                cnt++;
                resultStr = cnt+splicedArr[j];
            } else {
                if(j===0) resultArr.push(splicedArr[0]);
                cnt = 1;
                resultStr = splicedArr[j+1]
            }
            resultArr.push(resultStr);

        }
        console.log("resultArr : " + resultArr);
        answer.push(resultArr.join('').length);
    }
    // console.log(answer);
    answer = Math.min.apply(null, answer.map(e => parseInt(e)));
    return answer;
}

function spliceArr(str, su) {
    let resultArr = [];
    for(let i=0; i<str.length; i+=su) {
        resultArr.push(str.substr(i, su));
    }
    return resultArr;
}

// console.log(spliceArr("aabbaccc", 1));


let s = 	"ababcdcdababcdcd";
solution(s);
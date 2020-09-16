function solution(priorities, location) {
    let answer = 0;

    let printArr = priorities.map((value, index) => { 
        return {
            'data': index, 
            'priority': value
        } 
    });

    let target = printArr[location].data;

    while(printArr.length > 0) {
        let first = printArr.shift();
        if (printArr.some(value => value['priority'] > first['priority'])) {
            printArr.push(first);
            console.log(printArr);
        } else {
            answer++;
            if(first.data === target) break;
        }
    }

    console.log(answer);
    return answer;
}

let priorities = [2, 1, 3, 2];
let location = 2;
solution(priorities, location);
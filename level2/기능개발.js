function solution(progresses, speeds) {
    var answer = [];

    let restProgress = progresses.map(value => 100-value);
    let day = 0;
    let decress = Array.from(restProgress);

    let jsonE = {};

    while(decress.length > 0) {
        let first = decress[0];
        if(first > 0) {
            decress = decress.map((value, index) => value - speeds[index]);
            day++;
        } else {
            decress.shift();
            speeds.shift();
            (jsonE[day] === undefined) ? jsonE[day] = 1 : jsonE[day]++;
        }
    }

    answer = Object.values(jsonE);
    return answer;
}



let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
solution(progresses, speeds);
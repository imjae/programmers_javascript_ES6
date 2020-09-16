function solution(progresses, speeds) {
    var answer = [];

    // 남은양만큼 빼는 방식으로 문제풀이 결정
    let restProgress = progresses.map(value => 100-value);
    let day = 0;

    // 대상이 될 배열 복사
    let decress = Array.from(restProgress);

    // 몇일후, 몇개의 작업이 완료되는지 나타내는 객체
    let jsonE = {};

    while(decress.length > 0) {
        // 첫번째 남은 작업양이 0보다 크면 모든 배열에 하루치 양을 감소시킨후, day 하루 증가
        // 0보다 작아졌다면, decress배열과 speeds 배열모두 가장 앞 작업 제거.
        let first = decress[0];
        if(first > 0) {
            decress = decress.map((value, index) => value - speeds[index]);
            day++;
        } else {
            decress.shift();
            speeds.shift();
            // 제거 후. 완료한 일자에 맞게 1씩 증가시킴
            (jsonE[day] === undefined) ? jsonE[day] = 1 : jsonE[day]++;
        }
    }

    // object 객체의 value들을 배열 형태로 반환하는 방식 Object.values(<object>)
    answer = Object.values(jsonE);
    return answer;
}



let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
solution(progresses, speeds);
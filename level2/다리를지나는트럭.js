function solution(bridge_length, weight, truck_weights) {
    var answer = 0;

    // 무게 0인 트럭 없음. 무게합 구하기 편하게 비어있는경우 0으로 취급
    let bridge = new Array(bridge_length).fill(0);
    // 성능 위해 push, pop 함수 사용하기위에 배열 뒤집기
    let truck_weights_reverse = truck_weights.reverse();

    // console.log(onBridgeTotalWeight(bridge));
    let i = 0;
    do {
        // 일단 다리위에 있는다 한칸씩 옮기고 시작
        bridge = moveLeft(bridge);
        answer++;
        // 다리 첫번째 칸에 요소가 없는경우(0) 다리에 트럭 집어넣기
        if(bridge[bridge.length-1]==0) {
            bridge[bridge.length-1] = popTruck(truck_weights_reverse);
            // 트럭이 다리에 진입했는데, 중량 초과인경우 다시 빼서 truck_weight배열에 되돌리기
            if(onBridgeTotalWeight(bridge) > weight) {
                truck_weights_reverse.push(bridge[bridge.length-1]);
                bridge[bridge.length-1] = 0;
            }
        }
    // 다리위의 트럭이 하나도 없어 무게합이 0이거나, 
    // 기존 트럭들(truck_weights배열) 이 모두 pop() 되어 length가 0이면 반복문 중단
    } while(truck_weights_reverse.length > 0 || onBridgeTotalWeight(bridge) > 0);

    return answer;
}

let bridge_length = 100;
let weight = 100;
let truck_weights = [10,10,10,10,10,10,10,10,10,10];

solution(bridge_length, weight, truck_weights);

function popTruck(arr) {
    let result = arr.pop();
    if(!result) result = 0;

    return result;
}


function moveLeft(arr) {
    let result = new Array(arr.length).fill(0);

    arr.forEach((value, index) => {
        if(index > 0) {
            result[index-1] = value;
        }
    });
    return result;
}

function onBridgeTotalWeight(arr) {
    return arr.reduce((cal, cur) => cal+cur);
}
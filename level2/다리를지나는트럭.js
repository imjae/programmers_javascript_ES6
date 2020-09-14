function solution(bridge_length, weight, truck_weights) {
    var answer = 0;

    let bridge = new Array(bridge_length);
    let truck_weights_reverse = truck_weights.reverse();
    let cnt = 0;

    while(truck_weights.length > 0) {
        let targetCar = '';
        if(bridgeTotalWeight(bridge) < weight) {
            targetCar = truck_weights.pop();
            
        }

        bridge = moveLeft(bridge);

    }

    return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7,4,5,6];

solution(bridge_length, weight, truck_weights);

function moveLeft(arr) {
    let result = new Array(arr.length).fill(0);

    arr.forEach((value, index) => {
        if(index > 0) {
            result[index-1] = value;
        }
    });
    return result;
}

function bridgeTotalWeight(arr) {
    return arr.reduce((cal, cur) => cal+cur);
}
// 인형뽑기 배열
let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
// 뽑힌 인형 순서
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
    var answer = 0;

    let board_flip = two_dimension_array_flip(board);
    let board_flip_no_zero = [];
    
    board_flip.forEach(value => {
        board_flip_no_zero.push(removeZero(value));
    });
    

    let picked_board_arr = picked(board_flip_no_zero, moves);
    // console.log(onlyNumberArr(picked_board_arr));

    let cnt = samedValuePop(onlyNumberArr(picked_board_arr));
    return answer;
}

// 인접한 요소의 값이 같을경우 
function samedValuePop(arr) {
    let resultArr = arr;
   
    for (i in resultArr) {
        let idx = Number(i);
        console.log(`${idx}, ${Number(idx+1)}  :  ${resultArr[idx]} , ${resultArr[Number(idx+1)]}`);
        if(resultArr[idx] == resultArr[idx+1]) {
            console.log(resultArr.slice(idx, 2));
            // samedValuePop(resultArr);
            break;
        }
    }

    return resultArr
}

// 인형뽑기 배열 받아서, 순서대로 뽑은 이형 담는 배열 반환하는 함수
function picked(board, moves) {
    let returnArr = [];

    moves.forEach((v) => {
        returnArr.push(board[v-1].reverse().pop());
    });

    return returnArr;
}

// 2차원배열 받아 축 뒤집는 함수
function two_dimension_array_flip(two_dimension_arr) {
    let returnArr = [];
    let tempArr = [];

    for (var i in two_dimension_arr) {
        tempArr = [];
        for (var j in two_dimension_arr[i]) {
            // console.log(`${two_dimension_arr[j][i]}`);
            tempArr.push(two_dimension_arr[j][i]);
        }
        returnArr.push(tempArr);
    }
    // console.log(returnArr);
    return returnArr;
}

// 1차원 배열에서 숫자값만 남기기
function onlyNumberArr(arr) {
    let resultArr = [];

    arr.forEach((value) => {
        if (typeof value == 'number') {
            resultArr.push(value);
        }
    });

    return resultArr;
}

// 1차원 배열에서 0값 제거
function removeZero(arr) {
    let resultArr = [];

    arr.forEach((value) => {
        if (value != 0) {
            resultArr.push(value);
        }
    });

    return resultArr;
}

solution(board, moves);

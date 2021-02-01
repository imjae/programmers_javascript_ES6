// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다.
// 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이
// 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은
// 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와
// 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의
// 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
// - - -
// 제한 사항
// 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
// 작업 진도는 100 미만의 자연수입니다.
// 작업 속도는 100 이하의 자연수입니다.
// 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

// 입출력 예
// progresses	speeds	    return
// [93, 30, 55]	[1, 30, 5]	[2, 1]
// 첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업 가능하므로 7일간 작업 후 배포 가능
// 두 번째 기능은 30% 완료되어 있고 하루에 30%씩 작업 가능하므로 3일간 작업 후 배포 가능
// 하지만 첫 번째 기능이 완성되지 않았기 때문에 첫 번째 기능이 배포되는 7일째 배포 된다.
// 세 번째 기능은 55% 완료되어 있고 하루에 5%씩 작업 가능하므로 9일간 작업 후 배포 가능하다
// 따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포된다.

const solution = (progresses, speeds) => {
  var answer = [];

  const remainProgresses = progresses.map((element, index) => {
    return Math.ceil((100 - element) / speeds[index]);
  });

  const emptyArr = [];
  remainProgresses.reduce((a, c) => {
    if (a > c) {
      emptyArr.push(a);
      return a;
    } else {
      emptyArr.push(c);
      return c;
    }
  }, remainProgresses[0]);

  const resultArr = [];
//    [5, 10, 10, 10, 20, 20]
  let num = 1;
  for (let i=0; i<emptyArr.length-1; i++) {
    if(emptyArr[i] === emptyArr[i+1]) {
        num++;
    } else {
        resultArr.push(num);
        num = 1;
    }
    if(i+1 === emptyArr.length-1) resultArr.push(num);
  }

  answer = resultArr;

  return answer;
};

const result = solution([93, 30, 55], [1, 30, 5]);
console.log(result);

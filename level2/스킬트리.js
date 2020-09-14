function solution(skill, skill_trees) {
    let answer = [];

    let skill2Array = skill.split("");
    let resultArr = [];
    skill_trees.forEach(element => {
        let tmpArr = [];
        for (value of element.split("")) {
            if(skill2Array.indexOf(value) != -1) {
                tmpArr.push(value);
            }
        }
        resultArr.push(tmpArr);
    });

    let skillArr = skill.split('');
    resultArr.forEach(element1 => {
        let cnt = 0;
        element1.forEach((element2, index2) => {
            if(element2 != skillArr[index2]) return;
            cnt++;
        });
        if(cnt === element1.length) {
            answer.push(element1);
        }
    });

    console.log(answer);
    return answer.length;
}


function solution(skill, skill_trees) {

    return skill_trees.map(x => x.replace(new RegExp( `[^${skill}]`, 'g'), '')).filter(x => skill.indexOf(x) === 0 || x === "").length;
}


let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution(skill, skill_trees));
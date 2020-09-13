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


    console.log(resultArr);
    return answer;
}

let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
solution(skill, skill_trees);
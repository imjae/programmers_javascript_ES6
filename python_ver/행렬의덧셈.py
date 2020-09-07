def solution(arr1, arr2):
    array1 = []
    


    for i1, v1 in enumerate(arr1):
        for i2, v2 in enumerate(v1):
            print(i1, i2)
            answer[i1][i2] = arr1[i1][i2] + arr2[i1][i2]

    return answer

print(solution([[1,2],[2,3]], [[3,4],[5,6]]))
def solution(n):
    answer = list(str(n))
    for i1 in range(0, len(answer)-1):
        for i2 in range(0, len(answer)-i1-1):
            if answer[i2] < answer[i2+1]:
                answer[i2], answer[i2+1] = answer[i2+1], answer[i2]

    return answer

print(solution(12345))
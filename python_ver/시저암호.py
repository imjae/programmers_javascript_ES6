def solution(s, n):
    answer = []

    lowerList = [chr(v) for v in range(97, 123)]
    upperList = [chr(v) for v in range(65, 91)]

    for i, v in enumerate(s):
        if not v == ' ':
            if v in lowerList:
                idx = (lowerList.index(v) + n)%len(lowerList)
                answer.append(lowerList[idx])
            if v in upperList:
                idx = (upperList.index(v) + n)%len(upperList)
                answer.append(upperList[idx])
        else:
            answer.append(' ')

    return ''.join(answer)

print(solution('AB', 1))
print(solution('z', 1))
print(solution('a B z', 4))
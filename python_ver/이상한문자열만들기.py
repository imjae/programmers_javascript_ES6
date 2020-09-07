def solution(s):
    sList = s.split(' ')

    for i1, v1 in enumerate(sList):
        t = '';
        for i2, v2 in enumerate(v1):
            if i2 % 2 == 0:
                t += v1[i2].upper()
            else:
                t += v1[i2].lower()
        sList[i1] = t

    return sList


print(solution('try hello world'))
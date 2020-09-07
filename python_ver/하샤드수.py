def solution(x):
    x_str = str(x);
    rslt = 0;
    for i in x_str:
        rslt += int(i)

    print(rslt)
    
    if x % rslt == 0:
        return True
    else:
        return False

print(solution(10))
print(solution(11))
print(solution(12))
print(solution(13))

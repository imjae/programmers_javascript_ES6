def solution(num):
    
    return collatz(num, 0)


def collatz(num, cnt):
    cnt += 1
    if num%2 == 0:
        num = num/2
    else:
        num = num*3 + 1
    
    if num == 1:
        return cnt
    else:
        if cnt>500:
            return -1
        else:
            return collatz(num, cnt)

a = solution(16)

print(a)
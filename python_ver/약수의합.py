def solution(n):

    sqr = round(n**0.5)
    result = 0

    for i in range(1, sqr+1):
        if n % i == 0:
            if i == n//i:
                result += i
            else:  
                result += i + n//i

    return result

print(solution(5))
print(solution(25))
print(solution(12))
print(solution(28))
print(solution(48))

def solution(n):
    return (int((n**0.5)+1)**2) if isSqr(n) else -1

def isSqr(n):
    return (n ** 0.5)%1 == 0

print(solution(121))
print(solution(3))
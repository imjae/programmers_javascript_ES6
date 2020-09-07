import math
def solution(n):
    answer = math.floor(n/2) * '수박' if n%2 == 0 else math.floor(n/2) * '수박' + '수'
    return answer

print(solution(11))


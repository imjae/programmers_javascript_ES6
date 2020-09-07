def solution(n):
    return ''.join([str(n)[i] for i in range(len(str(n))-1, -1, -1)])

print(solution(12345))
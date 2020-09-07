def solution(phone_number):
    answer = ''
    size = len(phone_number)
    answer = ''.join(['*' for a in range(size-4)]) + phone_number[size-4:size]


    return answer

print(solution('01099541299'))
print(solution('0299541299'))
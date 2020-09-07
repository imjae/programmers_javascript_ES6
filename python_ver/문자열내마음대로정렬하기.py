# 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
# 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
# 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 
# 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

strings = ['sun', 'bed', 'car']
strings = ['abce', 'abcd', 'cdx']
n = 1

a = sorted(sorted(strings, key=lambda x: x[n]))

print(a)

# size = len(strings)

# for i in range(size-1):
#     for j in range(size-i-1):
#         if strings[j][n] > strings[j+1][n]:
#             strings[j], strings[j+1] = strings[j+1], strings[j]
#         elif strings[j][n] == strings[j+1][n]:
#             strings[j], strings[j+1] = min(strings[j],strings[j+1]), max(strings[j],strings[j+1])

# print(strings)
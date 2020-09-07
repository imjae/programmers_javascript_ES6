# 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

# arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
# arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

arr = [1,1,3,3,0,1,1]

arr2 = [arr[0]]

for i in range(1, len(arr)):
    if arr[i] != arr[i-1]:
        arr2.append(arr[i])
print(arr2)

# for i, v in enumerate(arr):
#     if v == arr[i+1]:
#         del arr[i]
#         i -= 1
# print(arr)

# for i1, v1 in enumerate(arr):
#     for i2 in range(i1+1, len(arr)):
#         if v1 == arr[i2]:
#             arr[i2] = None
#         else:
#             break

# for i in range(len(arr)-1, -1, -1):
#     if arr[i] == None:
#         del arr[i]

# print(arr)

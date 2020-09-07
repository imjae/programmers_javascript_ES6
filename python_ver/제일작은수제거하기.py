def solution(arr):
    del arr[arr.index(getMinValue(arr))]
    
    return arr if not len(arr) == 0 else [-1]

def getMinValue(arr):
    m = arr[0]

    for v in arr:
        if m > v:
            m = v

    return m


print(solution([4,3,2,1]))
print(solution([10]))
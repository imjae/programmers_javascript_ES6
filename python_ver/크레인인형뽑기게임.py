def solution(board, moves):
    answer = 0
    return answer

def makeStackList(board):
    return [[board[y][x] for y in range(0, len(board))] for x in range(0, len(board[0]))]

def picked(stackList, idx):
    try:
        pickedDoll = stackList[idx].pop()
    except IndexError:
        return None

    if (pickedDoll == 0):
        pickedDoll = picked(stackList, idx)
        return pickedDoll
    else:
        return pickedDoll

def samedValuePop(targetList):
    for i in range(len(targetList)-1):
        if targetList[i] == targetList[i+1]:
            targetList.pop(i)
            targetList.pop(i)
            samedValuePop(targetList)
            break

board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]
result = list()


stackList = [[board[y][x] for y in range(0, len(board))] for x in range(0, len(board[0]))]
[x.reverse() for x in stackList]

# print(stackList)
for v in moves:
    doll = picked(stackList, v-1)
    if doll != None:
        result.append(doll)

aLeng = len(result)

samedValuePop(result)

bLeng = len(result)

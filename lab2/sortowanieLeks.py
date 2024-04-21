a = ["1","2","3","11","21","111","231"]
temp = []
while len(a) > 0 :
    minimum = a[0]
    index = 0
    for j in range(len(a)) :
        if(a[j] < minimum) :
            minimum = a[j]
            index = j
    a.pop(index)
    temp.append(minimum)
print(temp)

from collections import defaultdict


t = int(input())
for i in range(t) :
    s = input()
    h = input()
    tot = 0
    dict_ = defaultdict(int) 
    for j in range(26) :
        dict_[s[j]] = j + 1
    for k in range(1 , len(h)) :
        tot += abs(dict_[h[k]] - dict_[h[k-1]])

    print(tot)    


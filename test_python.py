def sortChar(c):
    # Count all characters
    dic = {}
    for i in c:
        if i in dic:
            dic[i]+=1
        else:
            dic[i]=1
    # Swap key and value
    new_dic = {}
    for key,value in dic.items():
        if value in new_dic:
            new_dic[value].append(key)
        else:
            new_dic[value] = [key]
    # Sort the key
    s = ""
    for i in sorted(new_dic.keys()):
        for j in new_dic[i]:
            s+=j*i
    # Reverse the string
    result = ""
    for i in s:
        result = i + result
    return result
    
string = "Aabb"
print(sortChar(string))
function sortStr(c) {
    // Count all characters
    dict = {}
    for (var i of c) {
        if (i in dict) {
            dict[i]++
        } else {
            dict[i] = 1
        }
    }
    new_dic = {}
    // Swap key and value
    for (var i in dict) {
        if (dict[i] in new_dic) {
            new_dic[dict[i]].push(i)
        } else {
            new_dic[dict[i]] = [i]
        }
    }
    // Sort the keys
    var keys = Object.keys(new_dic)
    keys.sort( function ( a, b ) { return b - a; } )
    
    var result = ""
    for(var i of keys){
        for( var j of new_dic[i]){
            result += j.repeat(i)
        }
    }
    return result
}

const c = "Aabb"
console.log(sortStr(c))
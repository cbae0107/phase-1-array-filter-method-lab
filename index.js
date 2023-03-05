function findMatching(name,match){
    const result = name.filter(name=>name===match||name===match.toLowerCase());
    return result
}
function fuzzyMatch(name,match){
    const result = name.filter(name=>name.charAt(0)===match.charAt(0));
    return result
}
function matchName(drivers,match){
    const result = drivers.filter(drivers=>drivers.name===match)
        return(result)
    }

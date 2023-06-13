function solution(n) {
    n = n+"";
    
    n = n.split("").sort(function(a , b) {
	        return b-a;
        }).join(",").replaceAll(",","");
    

    var answer = n/1;
    return answer;
}
function solution(babbling) {
    var answer = 0;
    let sum = /aya|ye|woo|ma/g
    let sum2 = /(aya){2}|(ye){2}|(woo){2}|(ma){2}/g
    

	for(let i = 0 ; i < babbling.length; i++){
		babbling[i]= babbling[i].replace(sum2,"1")
		babbling[i] = babbling[i].replace(sum,"")
	    if(babbling[i] == "") {
		      answer += 1;
	     }
	 }
    return answer;
}
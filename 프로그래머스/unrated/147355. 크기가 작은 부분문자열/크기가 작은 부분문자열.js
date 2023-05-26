function solution(t, p) {
    var answer = 0;
    
    for (var i = 0; p.length + i <= t.length ; i++) {
		if (parseInt(t.substring(i,p.length + i)) <= parseInt(p)) {
			answer++;
		} 
	}
    
    return answer;
}
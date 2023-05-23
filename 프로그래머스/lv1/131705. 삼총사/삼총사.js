function solution(number) {
    var answer = 0;
    
    for (var i = 0; i < number.length-2; i++) {
		for (var j = i+1; j < number.length-1; j++) {
			for (var n = j+1; n < number.length; n++) {
				if (number[j] + number[i] + number[n] == 0) {
					answer++;
				}
			}
		}
	}
    
    
    
    
    return answer;
}
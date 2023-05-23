function solution(n, m) {
		let num = (n - m) > 0 ? n : m;
		let min ='';
	
		for (var i = num; i >= 1; i--) {
			if (n % i == 0 && m % i == 0) {
				min = i;
				break;
			}
		}
		
		let max = (n*m)/min;
	    var answer = [min, max];
	    return answer;
}
function solution(s) {
    let num1 = /zero|one|two|three|four|five|six|seven|eight|nine|0|1|2|3|4|5|6|7|8|9|10/g
	
	let s1 = [0,1,2,3,4,5,6,7,8,9];
	let s2 = ['zero','one','two','three','four','five','six','seven','eight','nine'];
	let sum = s.match(num1);
	
	var answer = '';
	for (var i = 0; i < sum.length; i++) {
		for (var j = 0; j < 10; j++) {
			if (sum[i] == s2[j]) {
				answer += s1[j];
			} else if (sum[i] == s1[j]){
				answer += sum[i];
			}
		}
	}
    answer *= 1;
    
    
    return answer;;
}
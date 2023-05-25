function solution(phone_number) {
    
    let result = "";
	let count = 0;
	for (var i = phone_number.length ; i > 4; i--) {
		result += "*";
		count++;
	}
	result += phone_number.substring(count);
    
    var answer = result;
    return answer;
}
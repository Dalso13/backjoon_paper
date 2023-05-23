function solution(n) {
    var i;
    for (i = 1; n % i != 1 ; i++) {}
    
    var answer = i;
    return answer;
}
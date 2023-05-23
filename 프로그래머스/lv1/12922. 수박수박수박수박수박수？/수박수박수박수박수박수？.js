function solution(n) {
    let sum = "";
    for(var i = 0; i <n; i++){
        if(i % 2 == 0){
            sum += "수";
        } else {
            sum += "박";
        }
    }
    
    var answer = sum;
    return answer;
}
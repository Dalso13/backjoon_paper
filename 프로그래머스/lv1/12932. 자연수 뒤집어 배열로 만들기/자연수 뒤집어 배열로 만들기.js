function solution(n) {
    n = n + "";
    
    n = n.split("");
   
    let answer = [];
    
   for(let i = 1; i <= n.length; i++){
        answer.push(n[n.length - i] * 1);
   }
    
    
    return answer;
}
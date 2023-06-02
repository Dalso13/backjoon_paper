function solution(A,B){
    let answer = 0;
    
    A =  A.sort(function(a , b) {
	    return a - b;
    });
    B =  B.sort(function(a , b) {
	    return b - a;
    })
    
  for(let i = 0; i < A.length; i++){
        answer += (A[i] * B[i]);
    
  }
    
    return answer;
}
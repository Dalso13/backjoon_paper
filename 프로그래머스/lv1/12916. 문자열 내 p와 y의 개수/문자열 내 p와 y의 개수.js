function solution(s){
    let answer = false;
    
    let p = s.match(/p/gi);
    let y = s.match(/y/gi);
    
    if(p == null){
        p = "";
    }
    
    if(y == null){
        y = "";
    }
    
   if(p.length == y.length){
       answer = true;
   }
    return answer;
    
}
function solution(s) {
    
    s = s.split(" ");
    
    maxv = Math.max(...s);
    minv = Math.min(...s);
    
   return  minv + " " + maxv;
}
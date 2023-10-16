class Solution {
    public int solution(int num) {
        int answer = 0;
        int num2 = 0;
        
        if(num == 1){
            return 0;
        }
        
        while(num != 1){     
            if(num % 2 ==0){
                num = num/2;
            } else if (num % 2 == 1){
                num = num*3+1;
            }
            num2++;
            
             if(num2 == 500){
                num2 = -1;
                num = 1;
            } 
        }
       
        answer = num2;
       return answer;  
    }
}
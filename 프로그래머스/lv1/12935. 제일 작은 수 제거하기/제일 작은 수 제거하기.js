function solution(arr) {
    var answer = [];
    if (arr.length == 1){
        answer.push(-1);
    } else {
       let sum = arr.reduce((acc, cur) =>   {
                      if(acc > cur){
              return acc = cur; 
            }  
           
           return acc; 
        })
       
        for(let i = 0 ; i < arr.length; i++){
            if(arr[i] == sum){
                arr.splice(i,1)
            }
        } 
        return answer = arr;
    }
    
    
   
   
}
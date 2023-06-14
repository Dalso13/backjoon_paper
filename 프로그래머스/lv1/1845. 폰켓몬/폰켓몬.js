function solution(nums) {
    
    let set = new Set(nums);
    
    console.log(set);
    
    var answer = [...set]; 
    
    if(nums.length/2 < answer.length){
        return nums.length/2;
    } else {
        return answer.length;
    }

    
}
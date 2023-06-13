function solution(a, b) {

    a.unshift(0);
    
    let answer = a.reduce((acc, cur) => {
         return acc + (b.shift() * cur)}
    )

    
    return answer;
}
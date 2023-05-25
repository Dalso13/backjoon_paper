function solution(new_id) {
    var answer = '';
    
		let num = new_id.match(/[A-Z]/g);
		let num2 = new_id.split(/[A-Z]/g);
		
		if (num != null) {
                new_id = '';
                if(num[0] != undefined){
                    for (var i = 0; i < num2.length; i++) {

                        if (num[i] == undefined) {
                            new_id += num2[i];
                            break;
                        }
                        new_id += num2[i] + num[i].toLowerCase();
                    }
                } else {
                 new_id += num2[0] + num.toLowerCase() + num2[1];
            }
		}
		
		new_id = new_id.replace(/[^\w-\.-\'-']/g,"");
		new_id = new_id.replace(/\.{2,}/g,".");
		
		new_id = new_id.replace(/^\./,"");
		new_id = new_id.replace(/\.$/,"");
    
		new_id = new_id.replace(" ", "a");
       
		if (new_id.length >= 16) {
			new_id = new_id.substring(0,15);
			
		}
		new_id = new_id.replace(/\.$/,"");
		
	  if (new_id.length <= 2) {
         if (new_id.length === 0) new_id = "aaa";
        else new_id += new_id[new_id.length - 1].repeat(3 - new_id.length);
     }
	answer = new_id;

    return answer;
}
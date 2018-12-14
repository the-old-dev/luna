import {callUrl} from "/module/call-url.js";

export async function testResponseFakers(t) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        	var callback = function(response) {
        		t.assert(response != null,"No response!");
        		t.assert(response == 'Hello World', "Response is not as expected!"); 
        		resolve();
        	}
        	
        	callUrl("GET", "/fake/response.txt", callback);
        	      
        }, 1000);
    });
		
}
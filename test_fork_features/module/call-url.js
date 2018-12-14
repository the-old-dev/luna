export function callUrl(method, url, callback) {
	var request = new XMLHttpRequest();
	request.open(method, url, true);
	request.onreadystatechange = function() {
		
		window.console.log(this.readyState + " : " + this.status + " : " + this.response);
		
		if (this.readyState == 4 && this.status == 200) {
			callback(this.response);
		}
		
	}
	request.send();
}
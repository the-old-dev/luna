// Return the fakes in an array
var myFakes = [ {
	requestPattern : '**/fake/response.txt',
	response : {
		status : 200,
		contentType : 'text/plain',
		body : 'Hello World'
	}
} ];

exports.fakes = myFakes;

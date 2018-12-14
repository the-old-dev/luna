import {helloA} from "/module/module-a.js";

export function testImport(t) {
	t.assert(helloA != null, 'There is no imported method!');
	t.assert(helloA() === true, 'The call of the imported method dues not return the expected!');  
}
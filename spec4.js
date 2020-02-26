/**
 * 
 */

describe("Non Angular website running in protractor", function(){
	
	it("google wesite search test",function(){
		
		
		browser.waitForAngularEnabled(false);
		
		
		browser.get("https://www.flytap.com");//google is waiting for ng or angular js webelemnbt - thats why it is failing 
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		//tagName[attribute= value]
		//var searchBox = element(by.css(input[type='text']));
		
		//browser.close();
		
	} )
	
})
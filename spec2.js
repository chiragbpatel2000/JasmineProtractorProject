/**
 * 
 */

describe('Calculator Tests', function(){
	
	
	it('locator finder',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
		var textBox = element(by.model("first")).sendKeys("10");
		
		var textBoxSecond = element(by.model("second")).sendKeys("10")
		
		element(by.id("gobutton")).click().then(function(){
			
			browser.sleep(5000);
			
		})
			
		
		

		
	})
	
})
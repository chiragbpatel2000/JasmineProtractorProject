/**
 * 
 */

describe('Calculator Tests', function(){
	
	
	it('locator finder',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
		var textBox = element(by.model("first")).sendKeys("10");
		
		//var dropDownBox = element(by.model("operator")).click();
		
		
		var textBoxSecond = element(by.model("second")).sendKeys("10")
		
		element(by.id("gobutton")).click()
		
		//css 
		
		//tagname[attribute=value]
		
		//h2[class='ng-binding']
		
	    expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("20") //Assertion --that is a jsmine code 100%
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text)
		})
			
		
		
	})
})
		
			
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
		
		var textBox = element(by.model("first")).sendKeys("20");
		
		//var dropDownBox = element(by.model("operator")).click();
		
		
		var textBoxSecond = element(by.model("second")).sendKeys("10")
		
		element(by.id("gobutton")).click()
		
		
		var textBox = element(by.model("first")).sendKeys("30");
		
		//var dropDownBox = element(by.model("operator")).click();
		
		
		var textBoxSecond = element(by.model("second")).sendKeys("10")
		
		element(by.id("gobutton")).click()
		
		//css 
		
		//tagname[attribute=value]
		
		//h2[class='ng-binding']
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(RepeterText){
			console.log("Repeter Value is :"+RepeterText)
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(RepeterText)
		})
		
		
		element.all(by.repeater("result in memory")).count().then(function(lengthvalue){
			console.log("Length is :"+lengthvalue)
		})
		
		element.all(by.repeater("result in memory")).each(function(value){
			value.element(by.css("td:nth-child(3)")).getText().then(function(itemlist){
				console.log("List Item :"+itemlist)
			})	
		})
		
	     //Assertion --that is a jsmine code 100%
		
		// dropdown getAttribute value
		element.all(by.tagName("option")).each(function(DropdownValue){
			DropdownValue.getAttribute("value").then(function(dropdownVal){
				console.log(dropdownVal)
			})
		})
		//dropdown getTex value
		element.all(by.tagName("option")).each(function(DropdownValue){
			DropdownValue.getText().then(function(dropdownVal){
				console.log(dropdownVal)
			})
		})
		
		//dropdown click
		
		element.all(by.tagName("option")).each(function(DropdownValue){
			DropdownValue.click();
			browser.sleep(3000)
			})
		
		
		
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text)
		})
			
		
		
	})
})
		
			
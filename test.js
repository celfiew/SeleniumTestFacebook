const { Builder,Capabilities, By } = require("selenium-webdriver");
const chromeCapabilities = Capabilities.chrome();
const assert = require('assert');

async function TC_001(){
    //configuration of capabilities, the basic or regular, characteristics of my navigator
    chromeCapabilities.set('chromeOptions', {args:['--headless']});

    //action into the chrome
    let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
    //actuate 
    await driver.get("https://www.facebook.com/");
     //maximize the window
    await driver.manage().window().maximize();

    //to be visible we need that the procces could be more slowly;
    await driver.sleep(5000);
    //see the UI SELENIUM IDE C22A
    // The instruction locates the field and then insert the text
    await driver.findElement(By.id('email')).sendKeys('celfiew@gmail.com');
    await driver.findElement(By.id('pass')).sendKeys('Cesarmauric100k');
    // The instruction clicks the button
    // In some pages we can find a dinamic id so we should identify the xpath.
    await driver.findElement(By.xpath("//button[@type = 'submit']")).click;
    await driver.sleep(2000);

    //validate the continue button 
    //maping=mapeando
    //getting the element value
    //to store into the variable buttonTest... the value that has that button, in this case the word "continue"
    // let buttonTextToCompare = await driver.findElement(By.id('checkpointSubmitButton'));
    // console.log(buttonTextToCompare)
    //Compare the content of the button
    // assert.strictEqual(buttonTextToCompare, "Continuar");
    console.log("Login succesfully");

    await driver.sleep(10000);

    //to close the open window 
    await driver.quit();
}

//we have to call the method 

TC_001();
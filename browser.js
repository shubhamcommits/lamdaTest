const { Builder } = require('selenium-webdriver')
const fs = require('fs')

/**
 * This function is responsible for spawning a new browser
 * @param {*} browserName 
 */
const spawnBrowser = (browserName) => {

    // Create the Driver
    // let driver = new Builder().forBrowser(browserName).setChromeOptions().setFirefoxOptions().build()

    var driver = new Builder().forBrowser(browserName).usingServer('http://hub:4444/wd/hub').build();

    // Return the driver
    return driver
}

/**
 * This function visits the link in the current browser
 * @param {*} driver 
 * @param {*} link 
 */
const visitLink = (driver, link) => {

    // Visits the link
    return driver.get(link)
}

/**
 * This function takes the screenshot of the currently opened browser
 * @param {*} driver 
 * @param {*} browserName 
 */
const takeScreenshot = (driver, browserName) => {

    // Takes the screenshot and save it to the server using filestream
    return driver.takeScreenshot().then((image, err) => {
        
        // Uploads Directory
        var dir = './uploads';

        // Create uploads directory
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        // Write the file into the directory
        fs.writeFile(`uploads/${browserName}-${Date.now()}.png`, image, `base64`, function (error) {
            if (error != null)
                console.log("Error occured while saving screenshot" + error);
        })
    })
}

/**
 * This function is responsible for performning end to end operation
 * @param {*} browserName 
 * @param {*} link 
 */
const performOperation = (browserName, link) => {

    // Spawn New Browser
    let driver = spawnBrowser(browserName)

    // Visit the link
    visitLink(driver, link)

    // Take Screenshot
    takeScreenshot(driver, browserName)

    // Quit the driver
    driver.quit()
}

// Export all the functions
module.exports = {
    performOperation
}



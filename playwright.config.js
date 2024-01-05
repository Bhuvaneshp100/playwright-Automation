// @ts-check
const {  devices } = require('@playwright/test');

const config  = {
 
  testDir : './tests',
  timeout : 30*5000,
  reporter: 'dot',
 


  use :
   {
      browserName: 'chromium',
      screenshot: 'on',
      trace:'on',
      contextOptions: {
        viewport: null, // This will maximize the window
      },

  }

}
module.exports =config;




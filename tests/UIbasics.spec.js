const {test,expect} =require('@playwright/test');
const LoginPage =require('../page_object-model/loginpage.js');
const wishlistpage= require('../page_object-model/Wishlistpage.js');

test('first test',async ({page})=>
{
   
 //  const email1= 'bhuvanesh.p@informa.com' ;
   //const password1 = '940093Bhuv@';

await page.goto("https://www.routledge.com/login");
await page.locator('//input[@id="eml"]').fill('bhuvanesh.p@informa.com');
await page.locator('//input[@id="pas"]').fill('940093Bhuv@');
await page.locator('//button[normalize-space()="Continue »"]').click();
//const Loginpage = new loginpage(page);

//Loginpage.validlogin();
});
const email= 'bhuvanesh.p@informa.com';
const pass =  '940093Bhuv@';
test.only('second test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(email,pass );
  const wishlist = new wishlistpage(page);
  await  wishlist.wishlisttest();
});
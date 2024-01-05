const exp = require("constants");

class wishlistpage{
    constructor (page){
        this.page =page;
        //some comment
    }
   async  wishlisttest(){

       await  this.page.locator('//a[@title="Wish List"]').click();
    }
}
module.exports=wishlistpage
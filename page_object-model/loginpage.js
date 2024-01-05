class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto("https://www.routledge.com/login");
    await this.page.locator('//input[@id="eml"]').fill(username);
    await this.page.locator('//input[@id="pas"]').fill(password);
    await this.page.locator('//button[normalize-space()="Continue »"]').click();
  }
}

module.exports = LoginPage;
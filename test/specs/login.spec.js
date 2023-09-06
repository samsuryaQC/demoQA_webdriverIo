describe('Login Page', () => {

    before(() => {
        browser.url('https://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });
     after(async() => {
        const logout = await $('/html/body/div[1]/div/div/div/p[2]/a');
        await logout.click();
     });

    it('Should enter login and direct to homepage',async () => {
        // const txtId = await $('#username');
        // await txtId.setValue('angular');

        // const txtPass = await $('#password');
        // await txtPass.setValue('password');

        const txtUs = await $('#formly_1_input_username_0');
        await txtUs.setValue('angular');

        // const btnLogin = await $('btn btn-danger');
        // await btnLogin.waitForClickable({ timeout: 3000 });
        // await btnLogin.click();

        // const titleHome = await $('/html/body/div[1]/div/div/div');

        // await expect(titleHome).toHaveTextContaining('Home');

    });
    
});
describe('Verify Text Box', () => {
    before(() => {
        browser.url('https://demoqa.com/text-box');
        const textboxTitle = $('main-header');
        expect(textboxTitle).toHaveTitle('Text Box');
    });

    after(() => {
        const output =$('output');
        expect(output).toHaveTextContaining('Gian Ahmad Asadi');
    });

    it('Should Success Insert Text Box', async () => {
        const fullname =await $('#userName');
        await fullname.setValue('Gian Ahmad Asadi');

        const email =await $('#userEmail');
        await email.setValue('gianahmad@gmail.com');

        const address = await $('#currentAddress');
        await address.setValue('Depok Jawa Barat');

        await browser.scroll(0, 200);

        const permAddress =await $('#permanentAddress');
        await permAddress.setValue('London England');

        const submit = await $('#submit');
        await submit.click();

        browser.pause(60000);
    });

    
});
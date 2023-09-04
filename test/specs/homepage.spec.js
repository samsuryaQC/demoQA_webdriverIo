describe('Demo QA Homepage', () => {

    it('Should open the main url and verify the titles',async() => {
        browser.url('https://demoqa.com/');

        const TitleImage = await $('//*[@id="app"]/header/a/img');
        expect(browser).toHaveTitle('DEMOQA');
        expect(TitleImage).toHaveLinkContaining('/image/');

    });

    it('Should verify elements menu', async() =>{
        const ElementMenu = await $('//*[@id="app"]/div/div/div[2]/div/div[1]');
        expect(ElementMenu).toHaveTitle('Elements');
        expect(ElementMenu).toBeClickable();
        await ElementMenu.click();
    });
    
});
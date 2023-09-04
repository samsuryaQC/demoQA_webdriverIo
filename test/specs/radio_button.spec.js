describe('Radio Button Function', () => {

    it('Should click radio button and give feedback result',async() => {
        browser.url('https://demoqa.com/radio-button');

        const rbyes = await $('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[2]/label');
        const rbimpresive = await $('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/label');
        const result = await $('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/p');

        await rbyes.click();
        result.waitForDisplayed({ timeout: 10000 });
        await expect(result).toHaveTextContaining('Yes');

        await rbimpresive.click();
        result.waitForDisplayed({ timeout: 10000 });
        await expect(result).toHaveTextContaining('Impressive');
       

    });

});



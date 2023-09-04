describe('Web Tables Page', () => {
    it('Should search for a name and get results according to the name you are looking for',async () => {
        browser.url('https://demoqa.com/webtables')

        const txtSearch = await $('#searchBox');
        const resultTable = await $('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/div/div[1]');
        // const searchBtn = await $('#basic-addon2');

        await txtSearch.setValue('Kierra');
        // await searchBtn.click();
        await expect(resultTable).toHaveTextContaining('Kierra');
        
    });
    
});
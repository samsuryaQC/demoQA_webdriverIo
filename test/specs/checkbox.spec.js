describe('CheckBox Menu', () => {
    it('Should can click checkbox and verify value', async () => {
        browser.url('https://demoqa.com/checkbox');

        const lovHome = await $('//*[@id="tree-node"]/ol/li/span/button');

        await lovHome.click();

        const cbDesktop =await $('//*[@id="tree-node"]/ol/li/ol/li[1]/span/label/span[1]');
        
        await cbDesktop.click();

        const result= await $('#result');
        await expect(result).toHaveTextContaining('desktop');

    });
    
});
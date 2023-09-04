describe('Buttons Page', () => {

    before(() => {
        browser.url('https://demoqa.com/buttons'); 
    });

    it('Should click doubleclick button and get results You have done a double click',async () => {
        
        const dbclick = await $('#doubleClickBtn');
        const message1 = await $('#doubleClickMessage');

        await dbclick.doubleClick();
        await expect(message1).toHaveTextContaining('You have done a double click');
        
    });

    it('Should click Right Click button and get results You have done a right click',async () => {

        const rghtclick = await $('#rightClickBtn');
        const message2 = await $('#rightClickMessage');

        await rghtclick.click({button : 'right'});
        await expect(message2).toHaveTextContaining('You have done a right click');
        
    });
    
});
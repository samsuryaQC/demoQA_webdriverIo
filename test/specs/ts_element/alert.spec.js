describe('Allert Menu', () => {
    before(() => {
        browser.url('https://demoqa.com/alerts')
    });

    it('Should click button and verify the alert',async () => {
        const btnSeealert = await $('#alertButton');
        await btnSeealert.click();

        console.log(browser.isAlertOpen())   
        console.log(browser.getAlertText() + 'You clicked a button') 
        browser.acceptAlert() 
    });
    it('Should click button and verify the alert wait 5 second',async () => {
        const btnAlertwait = await $('#timerAlertButton');
        await btnAlertwait.click();

        browser.pause(5000);

        console.log(browser.isAlertOpen())   
        console.log(browser.getAlertText() + 'This alert appeared after 5 seconds') 
        browser.acceptAlert() 
    });

    it('Should click button and Confirm The alert',async () => {
        const btnCnfrmalert = await $('#confirmButton')
        const confirmResult = await $('#confirmResult')
        await btnCnfrmalert.click();


        console.log(browser.isAlertOpen())   
        console.log(browser.getAlertText()) 
        browser.acceptAlert() 

        await expect(confirmResult).toHaveTextContaining('Ok')

    });
    it('Should input the alert and verify input',async () => {
        const btnInputalert = await $('#promtButton')
        const confirmResult2 = await $('#promptResult')
        await btnInputalert.click();


        console.log(browser.isAlertOpen())   
        browser.sendAlertText("Gian");
        browser.acceptAlert() 

        await expect(confirmResult2).toHaveTextContaining('Gian')

    });
    
});


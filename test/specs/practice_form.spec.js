describe('Practice Form', () => {

    before(() => {
        browser.url('https://demoqa.com/automation-practice-form');
    });

    it('Should Input Form and succes submit data',async () => {

        const firstName = $("#firstName");
        const lastName = $("#lastName");
        const email = $("#userEmail");
        const rbGmale = $("label[for='gender-radio-1']");
        const mobile = $("#userNumber");
        const dateOfbirth = await $("#dateOfBirthInput");
        const month =await $(".react-datepicker__month-select");
        const year =await $(".react-datepicker__year-select");
        const select = await $("div[aria-label='Choose Tuesday, January 17th, 1995']");


        await dateOfbirth.click();
        await month.click();
        await month.selectByAttribute('value', '0');
        await year.click();
        await year.selectByAttribute('value', '1995');
        await select.click()
        





        
    });
    
});
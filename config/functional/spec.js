describe('Sample Spec', ()=>{
    it('Launch Url', ()=>{
        browser.ignoreSynchronization = true;
        browser.get('http://google.com/');
        browser.close();
    });
})
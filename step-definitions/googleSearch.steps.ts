import { Given, When, Then } from '@wdio/cucumber-framework';
import googleHome from '../pageobjects/googleHome.page';
const googleH = new googleHome();


Given(/^Open (.+)$/, async (page) => {
    await console.log("page=",page)
    await browser.url(page)
});

When(/^enter any (.+) to search on google page$/, async (value) => {
    await console.log("value=",value);
    await browser.pause(3000);
    await googleH.searchAnyText(value);
    
});

Then(/^user is able to get correct result$/, async () => {
    
});
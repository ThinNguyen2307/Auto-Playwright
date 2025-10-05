import {test} from "@playwright/test";

test("Test 01", async ({page}) => {
    await test.step('<Navigate to this URL', async() => {
        await page.goto("https://material.playwrightvn.com");
        await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click();
    });

    await test.step('Fill infor for all fields', async() => {
        await page.locator("//input[@id='username']").fill("Anne Nguyen");
        await page.locator("//input[@id='email']").fill("anne@gmail.com");
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='traveling']").setChecked(true);
        await page.locator("//select[@id='interests']").selectOption("Art");
        await page.locator("//select[@id='country']").selectOption("Canada");
        await page.locator("//input[@id='dob']").pressSequentially("23071998", {
            delay:200
        })
        await page.locator("//input[@id='profile']").setInputFiles("pw-course/tests/lesson-5/test-data/image.txt");
        await page.locator("//textarea[@id='bio']").fill("Biography Anne");
        await page.locator("//input[@id='rating']").fill("10");
        await page.locator("//input[@id='newsletter']").click();
        await page.locator("//span[@class='slider round']").click();

    });

    await test.step('Click butotn register', async() => {
        await page.locator("//button[@type='submit']").click();
    })



});
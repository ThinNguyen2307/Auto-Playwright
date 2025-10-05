import {test} from "@playwright/test";

test("Test 02", async ({page}) => {
    await test.step('<Navigate to this URL', async() => {
        await page.goto("https://material.playwrightvn.com");
        await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
    });

    await test.step('Add products to cart', async() => {
        await page.locator("//button[@data-product-id='1']").dblclick();
        await page.locator("//button[@data-product-id='2']").click({
            clickCount:3,
        });
        await page.locator("//button[@data-product-id='3']").click();


    })

})
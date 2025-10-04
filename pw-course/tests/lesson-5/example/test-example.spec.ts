import { test } from "@playwright/test";

test("Test 01", async ({ page }) => {
    await test.step('<Navigate to this URL>', async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html")
    });
    await test.step('<Fill infor>', async () => {
      // Fill: Điền giá trị vào ô textbox, copy paste
        await page.fill("//input[@id='username']", "Playwright");
       //await page.fill("//input[@id='email']", "anneka2307@gmail.com")
       await page.locator("//input[@id='email']").fill("anneka2307@gmail.com");
       //pressSequentially: Nhập từng kí tự của giá trị vào ô textbox
       await page.locator("//textarea[@id='bio']").pressSequentially("Hello Anne Nha!" , {
        delay: 200
       })
       // Radio button => can not set check again
       await page.locator("//input[@id='female']").check(); 

       // Checkbox bình thường có thể set check lại
       await page.locator("//input[@id='reading']").setChecked(true);
       await page.locator("//input[@id='reading']").setChecked(false);

       //Dropdown
       await page.locator("//select[@id='country']").selectOption("Canada");

       // Set Input file: Trong 1 repo, để set input file => phải đẩy file đó vô cùng 1 repo, Playwright chỉ support với những thẻ input
       await page.locator("//input[@id='profile']").setInputFiles("pw-course/tests/lesson-5/test-data/image.txt");
    });
})

test("Test 02", async ({ page }) => {
    await test.step('<Single click>', async () => {
        await page.goto("https://material.playwrightvn.com/018-mouse.html")
        await page.locator("//div[@id='clickArea']").click();
    });

    await test.step('<Double click>', async () => {
        await page.locator("//div[@id='clickArea']").dblclick();
    });

    await test.step('<Shift + click>', async () => {
        await page.locator("//div[@id='clickArea']").click({
            modifiers: ["Shift"]
        });
    });
    await test.step('<Right + click>', async () => {
        await page.locator("//div[@id='clickArea']").click({
            button:"right"
        });
    });
})


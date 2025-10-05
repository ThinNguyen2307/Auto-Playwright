import {test} from "@playwright/test";

test("Test 03", async({page}) => {
    await test.step('<Vavigate to this URL', async() => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
    })

    await test.step('<Thêm mới 100 todo item có nội dung “Todo <i>” ', async() => {
        for (let i=0; i<=100; i++){
            await page.locator("//input[@id='new-task']").fill("Todo " + i);
            await page.locator("//button[@id='add-task']").click();
        }
    })

    await test.step('<Xoá các todo có số lẻ >', async() => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        })

        for (let i = 1; i<=100; i++){
            if(i%2 !== 0){
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    })
})
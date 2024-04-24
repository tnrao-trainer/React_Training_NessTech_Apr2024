// @ts-check
const { test, expect } = require('@playwright/test');

 
test.beforeEach(async ({ page }) => {
   await page.goto('http://localhost:3000/');
});

test('has title "React App"', async ({ page }) => {
   // Expect a title "to contain" a substring.
   await expect(page).toHaveTitle("React App");
  });

  // Fill user id textbox with "admin" value
test('fill user id textbox', async ({ page }) => {
  const txtUserId = page.getByPlaceholder('User Id'); 
  // const txtUserId = page.locator('User Id'); 
  await txtUserId.fill("admin");   
  let str  = await page.locator("input#t1").inputValue() ; 
  expect(str).toBe("admin");
});

  // testing login button click event  for valid user
test('login button click for valid user', async ({ page }) => {
  await page.getByPlaceholder('User Id').fill("admin"); 
  await page.getByPlaceholder('Password').fill("admin123"); 
  await page.locator("input#b1").click();
  let str = await page.locator("p#result").innerText();
  expect(str).toBe('Welcome to Admin');
});

 



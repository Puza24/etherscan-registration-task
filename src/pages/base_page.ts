import { expect, page } from "../../src/utils/hooks";
/**
 * @exports BasePage class containing basic methods
 */
export class BasePage {
  
  async click(selector) {
    await page.locator(selector).click();
  }
  async clear(selector) {
    await page.locator(selector).clear();
  }
  async compareText(selector, text) {
    await expect(page.locator(selector).first()).toHaveText(text);
  }
  async compareValue(selector, text) {
    await expect(page.locator(selector).first()).toHaveValue(text);
  }
  async enterText(selector: string, text: string) {
    await page.locator(selector).fill(text);
  }
  async shouldBeVisible(selector: string) {
    await expect(page.locator(selector).first()).toBeVisible();
  }
}

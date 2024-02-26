const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;
let liveServer = 'http://18.118.134.144'
let localServer = "http://localhost:8000"
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get(localServer);
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking the Draw button displays the div with id = 'choices'", async () => {
    await driver.get(localServer);
    await driver.findElement(By.id("draw")).click();
    let choicesDivEl = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choicesDivEl), 1000)
  });
  test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    await driver.get(localServer);
    await driver.findElement(By.id("draw")).click();
    let choicesDivEl = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choicesDivEl), 1000)
    await driver.findElement(By.className("bot-btn")).click();
    let playerDuoDivEl = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuoDivEl), 1000)
  });
});
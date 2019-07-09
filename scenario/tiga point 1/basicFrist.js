import { Selector } from 'testcafe';
import Page from './model';
import config from './config';

const page = new Page();

fixture `Message`
    .page `${config.baseUrl}`;

test('Show Message', async t => {
    await t
    .maximizeWindow()
    .setTestSpeed(0.5)
    .typeText(page.inputMessage, 'faris')
    .click('[onclick*="showInput();"]')
    .expect(Selector('#display').textContent).contains('faris');
    
});

test('Sum', async t => {
    await t
    .maximizeWindow()
    .setTestSpeed(0.5)
    .typeText(page.inputBil1, '1')
    .typeText(page.inputBil2, '1')
    .click(page.clickTotal)
    .expect(Selector('#displayvalue').textContent).contains('2');

});
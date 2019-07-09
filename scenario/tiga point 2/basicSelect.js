import { Selector } from 'testcafe';
import Page from './model';
import config from './config';

const page = new Page();

fixture `Select`
    .page `${config.baseUrl}`;

test('Select List Demo', async t => {
    const daySelect = Selector('#select-demo');
    const dayOption = daySelect.find('option');
    
    await t
    .click(daySelect)
    .click(dayOption.withText('Monday'))
    .expect(Selector('.selected-value').textContent).contains('Day selected :- Monday');
    
});

test('First Selected', async t => {

    const statesSelect = Selector('#multi-select');
    const statesOption = statesSelect.find('option');

    await t
    .maximizeWindow()
    .setTestSpeed(0.5)
    .click(statesSelect)
    .click(statesOption.withText('New York'))
    .click(page.clickPrintMe)
    .expect(Selector('.getall-selected').textContent).contains('First selected option is : New York')

});

test('Get All Selected', async t => {
    const statesSelect = Selector('#multi-select');
    const statesOption = statesSelect.find('option');

    await t
     .maximizeWindow()
     .click(statesSelect)
     .click(statesOption.withText('California',{ shift: true, ctrl :true }))
     .click(statesOption.withText('Florida',{ shift: true, ctrl : true }))
     .click(page.clickPrintAll)
    

})
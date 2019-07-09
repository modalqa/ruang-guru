import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.inputMessage = Selector('#user-message');
        this.inputBil1 = Selector('#sum1');
        this.inputBil2 = Selector('#sum2');
        this.clickTotal = Selector('#gettotal > button')
       


    }

}
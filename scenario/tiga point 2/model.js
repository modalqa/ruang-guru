import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.clickPrintMe = Selector('#printMe');
        this.clickPrintAll = Selector('#printAll');
       


    }

}
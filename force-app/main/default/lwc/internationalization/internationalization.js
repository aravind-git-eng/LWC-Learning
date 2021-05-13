import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/local';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir';
export default class Internationalization extends LightningElement {
    number = 12340987.45;
    //dir = DIR;
    dir='rtl';
    formattedNumber = new Intl.NumberFormat('ar-en',{
        style:'currency',
        //currency:CURRENCY,
        currency:'USD',
        currencyDisplay:'symbol'


    }).format(this.numbetr)
}
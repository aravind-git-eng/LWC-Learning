import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToLwc extends NavigationMixin(LightningElement) {
    goLwc(){
        console.log(`--coming in goLwc mtd--`);
        var defination = {
            componentDef:'c:navigationLwcTarget',
            attributes:{
                recordId:'1234567'
            }
        }
        console.log(`--defination--${JSON.stringify(defination)}`);
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:
            {
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
            
        })
    }
}
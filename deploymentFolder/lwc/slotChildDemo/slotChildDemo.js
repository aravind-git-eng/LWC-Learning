import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    slotHandler(){
        console.log(`---coming in slotHandler---`);
        const footerEle = this.template.querySelector('.slds-card__footer');
        console.log(`--footer ele is ${footerEle}`);
        if(footerEle){
            footerEle.classList.remove('slds-hide');
        }
            
    }
}
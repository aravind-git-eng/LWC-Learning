import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
    handleSlotChange(){
        const footEle = this.template.querySelector('footer');
        if(footEle){
            footEle.classList.remove('slds-hide');
        }
    }
}
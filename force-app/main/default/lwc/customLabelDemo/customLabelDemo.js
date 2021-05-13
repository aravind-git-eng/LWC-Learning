import { LightningElement } from 'lwc';
import DESCRIPTIONONE from '@salesforce/label/c.descriptionOne';
import DESCRIPTIONTWO from '@salesforce/label/c.descriptionTwo';
export default class CustomLabelDemo extends LightningElement {
    
    label = {
        descriptionOne : DESCRIPTIONONE,
        descriptionTwo : DESCRIPTIONTWO
    }
}
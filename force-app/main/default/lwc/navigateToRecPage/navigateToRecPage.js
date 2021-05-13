import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToRecPage extends NavigationMixin(LightningElement) {
    recViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName:'opportunity',
                recordId:'0061y000003uPAOAA2',
                actionName:'view'
            }
        })
    }

    recEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName:'opportunity',
                recordId:'0061y000003uPAOAA2',
                actionName:'edit'
            }
        })
    }
}
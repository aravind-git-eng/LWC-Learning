import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Opportunity',
                actionName:'new'
            }
        })
    }
    newRecordWithDefaultValues(){
        console.log("----in newRecordWithDefaultValues---");
        const defaultValues = encodeDefaultFieldValues({
            Name:'Opp Name',
            StageName: 'Prospecting'
            //CloseDate: new Date(today()).toISOString()
        })
        console.log(`defaultValues---- ${defaultValues}`);
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Opportunity',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValues
            }
        })
    }
    opplistView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Opportunity',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }
    navigateToContentDocument(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}
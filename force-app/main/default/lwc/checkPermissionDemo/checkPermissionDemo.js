import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/viewAllData';
import CUSTOMPER from '@salesforce/customPermission/show_details';
export default class CheckPermissionDemo extends LightningElement {
    get hasViewAllDataPermission(){
        console.log('--hasViewAllData---'+hasViewAllData);
        return hasViewAllData;
    }

    get hasCustomShowDetailsPermission(){
        console.log('---CUSTOMPER--'+CUSTOMPER);
        return CUSTOMPER;
    }
}
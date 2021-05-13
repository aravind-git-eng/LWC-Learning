import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id';
import IS_Guest from '@salesforce/user/isGuest';
export default class UserInformation extends LightningElement {
    id = ID;
    is_Guest = IS_Guest;
}
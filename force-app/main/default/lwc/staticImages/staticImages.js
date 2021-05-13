import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image';
import FISH_IMAGE from '@salesforce/resourceUrl/fish_image';
export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE;
    fishImage = FISH_IMAGE;
}
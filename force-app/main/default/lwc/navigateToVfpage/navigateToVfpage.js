import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToVfpage extends NavigationMixin(LightningElement) {
    navigateToVf(){
        console.log(`--coming in-navigate to vf mtd---`);
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navigateVF'
            }
        }).then(result=>{
            console.log(`---url---${result}`);
            window.open(result,'_blank');
        })
    }
}
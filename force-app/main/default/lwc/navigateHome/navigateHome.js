import { LightningElement } from 'lwc';
import NavigationMixin from 'lightning/navigation';
export default class NavigateHome extends NavigationMixin(LightningElement) {
    navagateHome(){
        this[NavigationMixin.Navigate]({
            type: "standard_namedPage",
            attributes:{
                pageName: "home"
            }
        })
    }
}
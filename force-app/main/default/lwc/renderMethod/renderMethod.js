import { LightningElement } from 'lwc';
//reference of all HTML files below
import signIn from './signIn.html'; 
import signUp from './signUp.html';
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedButton='';
    render(){
       return this.selectedButton === 'Sign Up'? signUp:
              this.selectedButton   === 'Sign In'? signIn:
              renderTemplate;
       
    }
    handleClick(event){
        this.selectedButton = event.target.label;
        console.log(this.selectedButton);
    }
    submitHandler(event){
        console.log('${event.target.label} success ');
    }
}
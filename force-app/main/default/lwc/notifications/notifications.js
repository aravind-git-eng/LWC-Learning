import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Notifications extends LightningElement {
    toastHandler1(){
        console.log('____inside toast methid---');
        this.handleToastEvent('success','{0} Account created!!!! {1}','success');
        
    }
    toastHandler2(){
        console.log('____inside toast methid---');
        this.handleToastEvent('error','{0} Account created!!!! {1}','error');
        
    }
    toastHandler3(){
        console.log('____inside toast methid---');
        this.handleToastEvent('warning','{0} Account created!!!! {1}','warning');
        
    }
    toastHandler4(){
        console.log('____inside toast methid---');
        this.handleToastEvent('information','{0} Account created!!!! {1}','info');
        
    }

    handleToastEvent(title,message,variant){
        const myEvent = new ShowToastEvent({
            //object destructring
            title,
            message,
            variant,
            messageData: [
                'Google',{
                    url:'http://www.google.com',
                    label:'Click to go'
                }

            ]
        })
        console.log('--event----'+myEvent);
        this.dispatchEvent(myEvent);
        console.log('--dispatch toast---'+this.dispatchEvent(myEvent));
    }
}
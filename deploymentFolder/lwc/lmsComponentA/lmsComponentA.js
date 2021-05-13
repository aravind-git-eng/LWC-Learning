import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import {MessageContext, publish, subscribe,unsubscribe,APPLICATION_SCOPE} from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {
    @wire(MessageContext)
    context;
    inputValue="";
    receivedMsg;
    subscription;
    connectedCallback(){
        console.log(`---in connected callback---`);
        this.subscribeMessage();
    }
    subscribeMessage( ){
        console.log(`---in subscribe mesage---`);
        this.subscription= subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    handleMessage(message){
        console.log(`--subscribe---${message}`);
        this.receivedMsg = message.lmsData.value ? message.lmsData.value: "No Msg from comp X";
    }
    inputhandler(event){
        this.inputValue = event.target.value;
        console.log(`--input value-- ${inputValue}`);
    }
    publishMessage(){
        const message = {
            lmsData:{
                value:this.inputValue
            }
        }
        publish(this.context, SAMPLEMC, message)
    }
}
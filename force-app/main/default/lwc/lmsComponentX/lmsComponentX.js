import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import {MessageContext,subscribe, APPLICATION_SCOPE, unsubscribe, publish} from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    @wire(MessageContext)
    context;
    receivedMessage;
    subscription;
    connectedCallback(){
        this.subscribeMessage();
    }
    subscribeMessage(){
        this.subscription= subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    handleMessage(message){
         this.receivedMessage = message.lmsData.value ? message.lmsData.value: "No Message to display";
    }
    handleUnsubscribe(){
        console.log("---coming in unscribe mtd---");
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    inputVal;
    
    inputhandler(event){
        console.log(`--x msg--${event.target.value}`);
        this.inputVal = event.target.value;
        console.log(`--x msg--${inputVal}`);
    }
    publishMessage(){
        const message = {
            lmsData:{
                value:this.inputVal
            }
        }
        console.log(`---in publisg---${message}`);
        publish(this.context,SAMPLEMC,message)
    }
    
}
({
    handleMessage : function(component, message) {
        console.log("---in received msg ---"+message.getParam("lmsData").value);
        if(message!=null && message.getParam("lmsData").value != null){
            console.log("--inside if---");
            component.set("v.receivedMessage", message.getParam("lmsData").value);
            console.log("+---received msg---"+v.receivedMessage);
        }
    },
    inputHandler : function(component, event){
        component.set("v.messageValue", event.target.value);
        console.log('---cominh in inputhandler--');
        
    },
    publishValue: function(component){
        let msg = component.get("v.messageValue");
        console.log("--msg--"+msg);
        let message = {
            lmsData:{
                value:msg
            }
        }
        console.log(`---publish msg--${message}`);
        component.find('SampleMessageChannel').publish(message);
        console.log("--publish msg---"+component.find('sampleMessageChannel').publish(message));
    }
})

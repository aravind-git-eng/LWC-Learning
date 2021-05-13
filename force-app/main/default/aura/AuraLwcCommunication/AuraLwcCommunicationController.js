({
    handleMsg : function(componet,event) {
        console.log("---coming in handle msg--");
        var msg = event.getParam('msg');
        componet.set("v.message", msg);
        console.log(`---message--enmsg-`+msg);
    }
})

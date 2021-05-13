({
    onLoad : function(component) {
        console.log(`--coming in onload fun--`);
        var mypageRef = component.get("v.pageReference"); // pagereference is avaiable wen we implement lightning:isUrlAddressable
        console.log(`----${JSON.stringify(mypageRef)}`);
        var id = mypageRef.state.c__id;
        console.log(`---id--${id}`);
        component.set("v.id", id);
        
    }
})

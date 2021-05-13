import { LightningElement } from 'lwc';

export default class LifrCycleParent extends LightningElement {
    constructor(){
        super();
        //flow from parent to child
        console.log("__parent constructor called___");
    }
    connectedCallback(){
        // to fetch data,listen call back
        //flow from parent to child
        console.log("__Parent connectedCallback mtd called___");
    }
    renderedCallback(){
        //flow from child to parent
        console.log("__parent renderedCallback mtd called__");
    }
    name = "";
    changeHandler(event){
        this.name = event.target.value;
    }
    isChildVisible = false;
    handleClick(){
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error, stack){
        console.log(error.message);
        console.log(stack);
    }
    
}
import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        //flow from parent to child
        console.log("__Child constructor called___");
    }
    interval;
    connectedCallback(){
        // to fetch data,listen call back
        //flow from parent to child
        console.log("__Child connectedCallback mtd called___");
        //window.addEventListener('click', this.handleClick );
       // this.interval = window.setInterval();

        throw new error('__loading child component fails---');
    }
    renderedCallback(){
        //flow from child to parent
        console.log("__child renderedCallback mtd called__");
    }
    disconnectedCallback(){
        alert("__child disconnected callback called ---");
        //window.removeEventListener('click', this.handleClick);
        //window.clearInterval(this.interval);
    }
}
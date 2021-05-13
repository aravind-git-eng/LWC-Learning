import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carousleData = [
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card",
            description:"first card description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second Card",
            description:"Second card description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"third Card",
            description:"third card description."
        }
    ];

    percentageNum = 0;
    percentageHandler(event){
        this.percentageNum = event.target.value;
    }

    handleClick(){
        console.log("___coming in parent handle clik mtd ");
        this.template.querySelector('c-p2c-slider-component').resetSlider();
    }
}

import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = "95";
    sliderChangeHandler(event){
        this.val = event.target.value;
    }
    @api resetSlider(){
        this.val = 22;
    }
}
import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
export default class ThirdPartyFiles extends LightningElement {
    isLoaded = false;
    currentDate='';
    renderedCallback(){
        
        console.log("--in renderCallBack---");
        if(this.isLoaded){
            return;
        }
        else{
            Promise.all([
                loadScript(this, MOMENT+'/moment/moment.min.js'),
                loadStyle(this, ANIMATE+'/animate/animate.min.css')
            ]).then(()=>{
                //success
                console.log('--in promise success--');
                this.setDateOnScreen();
            }).catch(error=>{
                console.log('---in errro promise');
                console.error(error)
            })
           this.isLoaded = true;
        }
        
    }
    setDateOnScreen(){
        console.log('--inside setDateOnScreen mtd--');
        this.currentDate = moment().format('LLLL');
        console.log(`--current date--${this.currentDate}`);
    }
}

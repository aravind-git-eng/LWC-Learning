import { LightningElement } from 'lwc';
import FONTAWESOME from '@salesforce/resourceUrl/fontawesome';
import {loadStyle} from 'lightning/platformResourceLoader';
export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false;
    openCards = [];
    moves = 0;
    matchCards = [];
    cards = [
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:2, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:5, listClass:"card", type:'cube', icon:'fa fa-cube'},
        {id:6, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:7, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:8, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:9, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:10, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:11, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:12, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:13, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:14, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:15, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:16, listClass:"card", type:'cube', icon:'fa fa-cube'}
    ];
    
    
    
    
    renderedCallback(){
        if(this.isLibLoaded){
            return
        }
        else{
            loadStyle(this, FONTAWESOME+'/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log("--fontawesome CSS loaded successfully---");
            }).catch(error=>{
                console.log("--error in loading fontawesome CSS loading--"+error);
            })
            this.isLibLoaded=true;
        }
        
    }

    displayCard(event){
        console.log("--coming in display card--");
        let currentCard = event.target;
        console.log("---currentcard---"+currentCard);
        currentCard.classList.add("open", "show", "disabled");
        console.log("--after adding css functions---"+this.currentcard);
        this.openCards = this.openCards.concat(event.target);
        const len = this.openCards.length;
        console.log("---opencard length---"+len);
        if(len === 2){
            console.log("--- in if opencard length---"+len);
            console.log(`--open card 0--${this.openCards[0].type} ---open card 1 --${this.openCards[1].type}`);
            this.moves = this.moves+1;
            if(this.opencards[0].type === this.openCards[1].type){
                this.matchCards = this.matchCards.concat(this.openCards[0],this.openCards[1]);
                this.matched();
            }
            else{
                this.unMatched();
            }
        }
        
    }
    matched(){
        this.openCards[0].classList.add("matched", "disabled");
        this.openCards[1].classList.add("matched","disabled");
        this.openCards[0].classList.remove("open","show");
        this.openCards[1].classList.remove("open","show");
        this.openCards = [];
    }
    unMatched(){
        this.openCards[0].classList.add("unmatched");
        this.openCards[1].classList.add("unmatched"); 
        this.action("DISABLE");
        setTimeout(()=>{
            this.openCards[0].classList.remove("open","show","unmatched");
            this.openCards[1].classList.remove("open","show","unmatched");
            this.action("ENABLE");
        },1100)
        this.openCards = [];
    }
    action(action){
        let cards = this.template.querySelectorAll('.card ');
        Array.from(cards).forEach(item=>{
            if(action === "ENABLE"){
                let isMatch = item.classList.contains("match");
                if(!isMatch){
                    item.classList.remove("disabled");
                }
            }
            if(action === "DISABLE"){
                item.classList.add("disabled");
            }
        })
    }
}
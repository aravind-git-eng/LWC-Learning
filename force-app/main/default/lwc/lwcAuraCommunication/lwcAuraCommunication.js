import { LightningElement,api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api msgFromAura;
    handleSendAura(){
        console.log(`---coming in handle send aura---`);
        const myEvent = new CustomEvent('sendMsg', {
            details:
            {
                "msg":"coming from lwc . going to aura"
            }
        })
        this.dispatchEvent(myEvent)
        console.log('---dispacth---'+this.dispatchEvent(myEvent));
    }
}
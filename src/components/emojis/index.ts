export enum Attribute {
    "color" = "color"
}

export class emojis extends HTMLElement{
    
    color?: String

    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            color: null,

        }
        return Object.keys(attrs)}
    
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){

            default: 
            this[propName] = newValue
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./emojis.css">
            <div class="${this.color}">
            `
        }
    }
}

customElements.define("my-emojis",emojis);

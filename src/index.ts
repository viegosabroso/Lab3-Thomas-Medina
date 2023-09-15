import * as components from "./components/indexhijo";
import {objectWithimages} from "./components/data/data"


export class myapp extends HTMLElement{

    divss: HTMLDivElement[] = []
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});

        objectWithimages.imagenes.forEach((Array) =>{
            const creatediv = this.ownerDocument.createElement("div");
            creatediv.classList.add("containerdiv")
            Array.forEach((line)=>{
                const linediv = this.ownerDocument.createElement("div")
                linediv.classList.add ("lineidv")
                line.forEach((number)=>{
                    const numberdiv = this.ownerDocument.createElement("my-emojis")
                    if(number === 0){
                        numberdiv.setAttribute(components.Attribute.color, "green")

                    }else{
                        numberdiv.setAttribute(components.Attribute.color, "black")
                
                    }
                    linediv.appendChild(numberdiv)
                })
                creatediv.appendChild(linediv)
            })
this.divss.push(creatediv)
        })};
    
    connectedCallback(){
        this.render();

    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./style.css">`

            this.divss.forEach((div: HTMLDivElement) => {
                this.shadowRoot?.appendChild(div)
        })}}
    
}

customElements.define("my-app",myapp);

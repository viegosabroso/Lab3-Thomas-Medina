(()=>{"use strict";var e;!function(e){e.color="color"}(e||(e={}));class t extends HTMLElement{static get observedAttributes(){return Object.keys({color:null})}attributeChangedCallback(e,t,s){this[e]=s,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="./emojis.css">\n            <div class="${this.color}">\n            `)}}customElements.define("my-emojis",t);const s={imagenes:[[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1]],[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,1,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,0,1],[1,0,0,1,1,1,0,0,1],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0]]]};class o extends HTMLElement{constructor(){super(),this.divss=[],this.attachShadow({mode:"open"}),s.imagenes.forEach((t=>{const s=this.ownerDocument.createElement("div");s.classList.add("containerdiv"),t.forEach((t=>{const o=this.ownerDocument.createElement("div");o.classList.add("lineidv"),t.forEach((t=>{const s=this.ownerDocument.createElement("my-emojis");0===t?s.setAttribute(e.color,"green"):s.setAttribute(e.color,"black"),o.appendChild(s)})),s.appendChild(o)})),this.divss.push(s)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="./style.css">',this.divss.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})))}}customElements.define("my-app",o)})();
if(!customElements.get('s-our-clients')){

  customElements.define('s-our-clients', class SOurClients extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    console.log(this.getAttribute('data-speed'));
   
  }
  
})

}


















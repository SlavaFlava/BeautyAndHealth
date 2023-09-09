if(!customElements.get('s-header')){
  customElements.define('s-header', class SHeader extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.querySelector('.header').addEventListener("click", () => ('.header').classList.add('active'))
  }

})

}


















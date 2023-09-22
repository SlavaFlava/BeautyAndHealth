if (!customElements.get('s-steps-scroll')) {

  customElements.define('s-steps-scroll', class SStepsScroll extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.scrollEvent()
    }

    activeImages = [1,2]
    checkHeight() {

      const images = this.querySelectorAll('.s-steps-scroll__images__image')
      const contents = Array.from(this.querySelectorAll('.s-steps-scroll__content__step'))

      images.forEach((e) => {
        if (e.getBoundingClientRect().y < (Math.round(window.screen.availHeight / 3))) {
          if (!this.activeImages.includes(e.getAttribute('data-image-index'))) {              
            contents[e.getAttribute('data-image-index')-2] == undefined ? false : contents[e.getAttribute('data-image-index')-2].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--top'
            contents[e.getAttribute('data-image-index') - 1] == undefined ? false : contents[e.getAttribute('data-image-index') - 1].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--active'
            contents[e.getAttribute('data-image-index')] == undefined ? false : contents[e.getAttribute('data-image-index')].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--bottom' 
            this.activeImages.push(e.getAttribute('data-image-index'));
          } 
        }
        else if (e.getBoundingClientRect().y > (Math.round(window.screen.availHeight)+100) && this.activeImages.includes(e.getAttribute('data-image-index'))) {
          contents[e.getAttribute('data-image-index')-3] == undefined ? false : contents[e.getAttribute('data-image-index')-3].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--top'
          contents[e.getAttribute('data-image-index')-2] == undefined ? false : contents[e.getAttribute('data-image-index')-2].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--active'
          contents[e.getAttribute('data-image-index')-1] == undefined ? false : contents[e.getAttribute('data-image-index')-1].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--bottom' 
          this.activeImages.pop();
        }
      })
    }

    scrollEvent() {
      window.addEventListener('scroll', () => this.checkHeight())
    }
  })
}
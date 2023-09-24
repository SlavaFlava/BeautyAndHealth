if (!customElements.get('s-steps-scroll')) {

  customElements.define('s-steps-scroll', class SStepsScroll extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.scrollEvent()
      this.querySelector('.s-steps-scroll').style.height = this.sectionHeight + 'px'
    }

    activeImages = []
    imagesTranslate = 0
    sectionHeight = this.querySelector('.s-steps-scroll__row').offsetHeight
    scrollPosImage = 0
    sectionTopValue = 0
     

    toggleFixedSection() {
      console.log('1111111111');
      if(this.getBoundingClientRect().y < 100 && this.sectionTopValue == 0 ) {
         this.querySelector('.s-steps-scroll__row').classList.add('.s-steps-scroll__row--active')
         this.sectionTopValue = window.scrollY
      } else if (window.scrollY < this.sectionTopValue) {
        this.querySelector('.s-steps-scroll__row').classList.remove('.s-steps-scroll__row--active')
        this.sectionTopValue = 0
      } else if (window.scrollY > (this.sectionTopValue + this.sectionHeight)){
        this.querySelector('.s-steps-scroll__row').classList.remove('.s-steps-scroll__row--active')
      }
    }
    

    translateImages() {
      const wrapperImages = this.querySelector('.s-steps-scroll__images')
      if(this.sectionTopValue != 0 ){
         wrapperImages.style.transform = 'translateY('+ (this.sectionTopValue - window.scrollY) +'px)'
      }
    

      // console.log(window.scrollY);
      // e.querySelector('img').style.top = -(window.scrollY- this.scrollPosImage)/10 + 'px' // scroll
      // this.scrollPosImage = window.scrollY // scroll
    }


    switchSteps() {   

      const images = this.querySelectorAll('.s-steps-scroll__images__image')
      const contents = Array.from(this.querySelectorAll('.s-steps-scroll__content__step'))

      images.forEach((e) => {
        if (e.getBoundingClientRect().y < (Math.round(window.screen.availHeight / 3))) {
          if (!this.activeImages.includes(e.getAttribute('data-image-index'))) {
            contents[e.getAttribute('data-image-index') - 2] == undefined ? false : contents[e.getAttribute('data-image-index') - 2].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--top'
            contents[e.getAttribute('data-image-index') - 1] == undefined ? false : contents[e.getAttribute('data-image-index') - 1].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--active'
            contents[e.getAttribute('data-image-index')] == undefined ? false : contents[e.getAttribute('data-image-index')].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--bottom'
            this.activeImages.push(e.getAttribute('data-image-index'));
          }
        }
        else if (e.getBoundingClientRect().y > (Math.round(window.screen.availHeight) + 100) && this.activeImages.includes(e.getAttribute('data-image-index'))) {
          contents[e.getAttribute('data-image-index') - 3] == undefined ? false : contents[e.getAttribute('data-image-index') - 3].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--top'
          contents[e.getAttribute('data-image-index') - 2] == undefined ? false : contents[e.getAttribute('data-image-index') - 2].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--active'
          contents[e.getAttribute('data-image-index') - 1] == undefined ? false : contents[e.getAttribute('data-image-index') - 1].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--bottom'
          this.activeImages.pop();
        }
      })
    }

    scrollEvent() {
      window.addEventListener('scroll', () => (this.switchSteps(), this.toggleFixedSection(), this.translateImages()))
    }
  })
} 
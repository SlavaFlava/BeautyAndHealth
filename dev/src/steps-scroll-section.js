if (!customElements.get('s-steps-scroll')) {

  customElements.define('s-steps-scroll', class SStepsScroll extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.scrollEvent()
      this.querySelector('.s-steps-scroll').style.height = this.sectionHeight + 'px'
      this.querySelector('.s-steps-scroll__row').style.height = '700px'
    }

    activeImages = []
    imagesTranslate = 0
    sectionHeight = this.querySelector('.s-steps-scroll__row').offsetHeight
    srollPosImage = 0
    sectionTopValue = 0
    sectionBottomValue = 0

    toggleFixedSection() {
      if (this.querySelector('.s-steps-scroll__row').getBoundingClientRect().y < 100 && this.sectionTopValue == 0) {
        this.querySelector('.s-steps-scroll__row').classList.add('s-steps-scroll__row--active')
        this.querySelector('.s-steps-scroll__row').style.transform = 'translateY(0px)'
        this.sectionTopValue = window.scrollY
      } else if (window.scrollY < this.sectionTopValue) {
        this.querySelector('.s-steps-scroll__row').classList.remove('s-steps-scroll__row--active')
        this.sectionTopValue = 0
      } else if (window.scrollY > (this.sectionTopValue + this.sectionHeight - 500)) {
        this.querySelector('.s-steps-scroll__row').classList.remove('s-steps-scroll__row--active')
        this.querySelector('.s-steps-scroll__row').style.transform = 'translateY(' + (this.sectionHeight - 600) + 'px)'
        this.sectionBottomValue = window.scrollY
      } else if (window.scrollY < (this.sectionTopValue + this.sectionHeight - 500) && this.sectionBottomValue > 0) {
        this.sectionBottomValue = 0
        this.querySelector('.s-steps-scroll__row').classList.add('s-steps-scroll__row--active')
        this.querySelector('.s-steps-scroll__row').style.transform = 'translateY(0px)'
      }
    }

    translateImages() {
      const wrapperImages = this.querySelector('.s-steps-scroll__images')
      if (this.sectionTopValue != 0) {
        wrapperImages.style.transform = 'translateY(' + (this.sectionTopValue - window.scrollY) + 'px)'
      }


      // e.querySelector('img').style.top = -(window.scrollY - this.srollPosImage)/10 + 'px' -------scroll
      // this.srollPosImage = window.scrollY   -------scroll

    }

    switchSteps() {

      const images = this.querySelectorAll('.s-steps-scroll__images__image')
      const contents = Array.from(this.querySelectorAll('.s-steps-scroll__content__step'))

      this.sectionTopValue      // 300

      const heightImage = 700  // visota kartinki + margin

      if(this.sectionTopValue != 0){
        console.log(this.sectionTopValue);
        if(window.scrollY >= this.sectionTopValue + 700){
          console.log('set active 2');
        }
      }


      
























      // images.forEach((e) => {
      //   if (e.getBoundingClientRect().y < (Math.round(window.screen.availHeight / 3))) {
      //     if (!this.activeImages.includes(e.getAttribute('data-image-index'))) {
      //       contents[e.getAttribute('data-image-index') - 2] == undefined ? false : contents[e.getAttribute('data-image-index') - 2].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--top'
      //       contents[e.getAttribute('data-image-index') - 1] == undefined ? false : contents[e.getAttribute('data-image-index') - 1].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--active'
      //       contents[e.getAttribute('data-image-index')] == undefined ? false : contents[e.getAttribute('data-image-index')].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--bottom'
      //       this.activeImages.push(e.getAttribute('data-image-index'));
      //     }
      //   }
      //   else if (e.getBoundingClientRect().y > (Math.round(window.screen.availHeight) / 2) && this.activeImages.includes(e.getAttribute('data-image-index'))) {
      //     contents[e.getAttribute('data-image-index') - 3] == undefined ? false : contents[e.getAttribute('data-image-index') - 3].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--top'
      //     contents[e.getAttribute('data-image-index') - 2] == undefined ? false : contents[e.getAttribute('data-image-index') - 2].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--active'
      //     contents[e.getAttribute('data-image-index') - 1] == undefined ? false : contents[e.getAttribute('data-image-index') - 1].classList = 's-steps-scroll__content__step s-steps-scroll__content__step--bottom'
      //     this.activeImages.pop();
      //   }
      // })
    }

    scrollEvent() {
      window.addEventListener('scroll', () => (this.switchSteps(), this.toggleFixedSection(), this.translateImages()))
    }


  })

}

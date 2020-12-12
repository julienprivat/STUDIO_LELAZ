import Default from './default'
import select from 'dom-select'
import configQ from '@/util/func/configQ'
import config from '@/config'
import event from 'dom-event'
import PerfectScrollbar from 'perfect-scrollbar';
import TweenMax from 'gsap'
import { gsap } from "gsap"
import { detect } from 'detect-browser'
import ImagePreloader from 'image-preloader'
import PromiseDelay from 'promise-ext-delay'





class Home extends Default {
	constructor() {
		super('home')
	}
	mounted() {

        configQ(window.innerWidth)
        this.cache()
        this.init()

    }

    cache() {

        this.containers = [...document.querySelectorAll('.home_part')]
        this.html = document.documentElement
        this.scrollTimer = -1
        this.locked = false
        this.browser = detect()

    }

    init() {

        this.addEvents('on')
        configQ(window.innerWidth)
        config.isSmall && this.initCarouselsMobile()

    }

    addEvents(type) {

        this.browser.name == 'safari' && this.containers.forEach((container) => {
            event[type](container, 'scroll', (container) => {
                this.scrollTest(container)
            })
        })
        this.containers.forEach((container) => {
            event[type](container, 'scroll', (container) => {
                this.monitor(container)
            })
        })
    }

    initCarouselsMobile() {

        console.log('here')
        const carousels = [...document.querySelectorAll('.home_part')]

        carousels.forEach((carousel) => {

            const items = [...carousel.querySelectorAll('.home_part_item')]
            const width = window.innerWidth - 50

            const carouselWidth = ((items.length + 1) * width) + ((items.length + 1) * 2)
            console.log(carouselWidth)
            carousel.querySelector('.carousel_container').style.width = carouselWidth + 'px'

        })
    }

    scrollTest(container) {

        if (this.scrollTimer !== -1) {
            clearTimeout(this.scrollTimer);
          }

          if (container.scrollTop <= 0 ||
              container.scrollTop >= container.scrollHeight - container.offsetHeight) {
            this.unlock();
          } else {
            this.lock();
            this.scrollTimer = setTimeout(this.unlock, 150); // consider 150ms of inactivity to be the end of a scroll
          }

    }

    monitor(container) {

        const cont = container.target.getBoundingClientRect().bottom;

        const items = [...container.target.querySelectorAll('.image_container.image_hide')]

        items.forEach((item) => {
            const im = item.getBoundingClientRect().top + 70;
            if (im < cont) {

                const image = item.querySelector('img')
                image.style.transform = 'translate(0px,0px)'
                image.style.opacity = 1
                item.classList.remove('image_hide')

            }
        })

    }

    lock() {
        if (!this.locked) {
            this.locked = true
            this.html.style.overflow = 'hidden'
        }
    }

    unlock() {
        if (this.locked) {
            this.locked = false
            this.html.style.overflow = ''
        }
    }

	beforeDestroy() {

        this.addEvents('off')

    }

    onresize() {
    }

	resize(w) {

        configQ(window.innerWidth)

	}
}

export default Home
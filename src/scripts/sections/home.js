import Default from './default'
import select from 'dom-select'
import configQ from '@/util/func/configQ'
import config from '@/config'
import event from 'dom-event'
import PerfectScrollbar from 'perfect-scrollbar';
import TweenMax from 'gsap'
import { gsap } from "gsap"
import { detect } from 'detect-browser'





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

    }

    addEvents(type) {

        this.browser.name == 'safari' && this.containers.forEach((container) => {
            event[type](container, 'scroll', (container) => {
                this.scrollTest(container)
            })
        })

    }

    scrollTest(container) {

        console.log('hello')
        if (this.scrollTimer !== -1) {
            clearTimeout(this.scrollTimer);
          }

          if (container.scrollTop <= 0 ||
              container.scrollTop >= container.scrollHeight - container.offsetHeight) {
            // if scrollbar reaches top or bottom, unlock
            this.unlock();
          } else {
            this.lock();
            // defer unlocking scroll
            this.scrollTimer = setTimeout(this.unlock, 150); // consider 150ms of inactivity to be the end of a scroll
          }

    }

    lock() {
        if (!this.locked) {
            this.locked = true;
            this.html.style.overflow = 'hidden';
        }
    }

    unlock() {
        if (this.locked) {
            this.locked = false;
            this.html.style.overflow = '';
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
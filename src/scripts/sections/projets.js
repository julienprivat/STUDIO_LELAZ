import Default from './default'
import select from 'dom-select'
import configQ from '@/util/func/configQ'
import config from '@/config'
import event from 'dom-event'
import PerfectScrollbar from 'perfect-scrollbar';
import TweenMax from 'gsap'
import { gsap } from "gsap"
import Flickity from 'flickity'





class Projets extends Default {
	constructor() {
		super('projets')
	}
	mounted() {

        configQ(window.innerWidth)
        this.cache()
        this.init()

    }

    cache() {


    }

    init() {

        this.addEvents('on')
        console.log('pr')

    }

    addEvents(type) {

        event[type](document, 'scroll', this.saveNavPosition)

    }

    saveNavPosition() {

        const bottomNav = select('.nav_projects').getBoundingClientRect().bottom,
              top = select('footer').getBoundingClientRect().top,
              imageBottom = select('.visual_part').getBoundingClientRect().bottom

        if (top - imageBottom < 0) {

            select('.visual_part').setAttribute('style', 'bottom: 278px')

        } else {

            select('.visual_part').setAttribute('style', `top: ${bottomNav}px`)

        }

    }

	beforeDestroy() {

    }

    onresize() {
    }

	resize(w) {

        configQ(window.innerWidth)

	}
}

export default Projets
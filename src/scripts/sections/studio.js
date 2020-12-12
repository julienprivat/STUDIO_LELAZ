import Default from './default'
import select from 'dom-select'
import configQ from '@/util/func/configQ'
import config from '@/config'
import event from 'dom-event'
import PerfectScrollbar from 'perfect-scrollbar';
import TweenMax from 'gsap'
import { gsap } from "gsap"
import Flickity from 'flickity'





class Studio extends Default {

	constructor() {
		super('studio')
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
        configQ(window.innerWidth)
        !config.isSmall && this.initScroll()

    }

    addEvents(type) {


    }

    initScroll() {

        select('html').style.scrollSnapType = 'y mandatory'
        select('body').style.scrollSnapType = 'y mandatory'
        select('.footer_bottom').style.scrollSnapAlign = 'end'
        select('.footer_bottom').style.scrollMarginBottom = '17px'

    }

	beforeDestroy() {

        this.addEvents('off')
        select('html').style.scrollSnapType = ''
        select('body').style.scrollSnapType = ''
        select('.footer_bottom').style.scrollSnapAlign = ''
        select('.footer_bottom').style.scrollMarginBottom = ''

    }

    onresize() {
    }

	resize(w) {

        configQ(window.innerWidth)

	}
}

export default Studio
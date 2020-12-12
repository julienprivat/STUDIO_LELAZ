import Default from './default'
import select from 'dom-select'
import configQ from '@/util/func/configQ'
import config from '@/config'
import event from 'dom-event'
import PerfectScrollbar from 'perfect-scrollbar';
import TweenMax from 'gsap'
import { gsap } from "gsap"
import Flickity from 'flickity'





class Hello extends Default {
	constructor() {
		super('hello')
	}
	mounted() {

        configQ(window.innerWidth)
        this.cache()
        this.init()

    }

    cache() {


    }

    init() {

        !config.isSmall && this.initCarousel()

    }

    initCarousel() {

        var elem = document.querySelector('.carousel')
		var flkty = new Flickity( elem, {
            // option
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true,
            wrapAround: true,
            pageDots: false,
            draggable: true,
            lazyLoad: true,

		})
    }

	beforeDestroy() {

    }

    onresize() {
    }

	resize(w) {

        configQ(window.innerWidth)

	}
}

export default Hello
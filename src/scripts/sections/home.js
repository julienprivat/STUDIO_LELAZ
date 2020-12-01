import Default from './default'
import select from 'dom-select'
import configQ from '@/util/func/configQ'
import config from '@/config'
import event from 'dom-event'
import $ from 'jquery'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui/themes/base/draggable.css'
import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/draggable'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"
import TweenMax from 'gsap'
import { gsap } from "gsap"





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

        this.thums = [...document.querySelectorAll('.thums')]

        this.preloaderItem = select('.logo_container')
        this.LOGO = {
            section: select('.logo_container'),
            get chars() {
                return this.section.querySelectorAll('.logo_container .word > .char, .whitespace')
			},
		}
    }

    init() {

        if (!config.isSmall) {

            this.thums.forEach((thum, key) => {

                $(`#thum${key}`).draggable()
    
            })

        } else {

            setTimeout(() => {

                this.split()

            }, 1000)

        }

    }

    split() {


        Splitting()
		const timelineSettings = {
            staggerValue: 0.2,
            charsDuration: 0.3
		}

		let tl = gsap.timeline()
		tl.to(this.preloaderItem, {
			duration: 0,
			opacity: 1,
			ease: 'expo.easeInOut',
		})
		tl.add('start')
		tl.staggerTo( this.LOGO.chars, timelineSettings.charsDuration, {
			// ease: 'Power3.easeIn',
			y: 0,
		}, timelineSettings.staggerValue, 'start')

    }

	beforeDestroy() {

    }

    onresize() {
    }

	resize(w) {

        configQ(window.innerWidth)

	}
}

export default Home
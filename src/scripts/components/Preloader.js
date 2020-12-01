import select from 'dom-select'
import TweenMax from 'gsap'
import { gsap } from "gsap"
import remove from 'dom-remove'
import { on, emit } from 'evx'

class Preloader {
	constructor() {
		this.cache()
		this.init()
	}
	cache() {
		this.preloader = select('.preloader')
		this.content = document.getElementById('content')
		this.preloader_titre = select('.preloader__titre')
		this.preloader_text    = select('.preloader__activite')
		this.page = select('.page')
	}
	init() {
		this.content.style.opacity = 0
		let tl = gsap.timeline()
		tl.to(this.preloader, 1, {
			opacity: 0,
			height: 0,
			ease: 'expo.easeInOut',
		}),
		tl.to(this.content, 0.3, {
			opacity: 1,
			ease: 'expo.easeInOut',
			onComplete: this.destroy
		})
	}
	destroy() {
		remove(this.preloader)

	}
}

export default Preloader
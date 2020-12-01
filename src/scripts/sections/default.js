import Barba from 'barba.js'
import bind from 'es6-class-bind-all'
import select from 'dom-select'
import config from '@/config'
import choozy from 'choozy'
import { detect } from 'detect-browser'
import configQ from '../util/func/configQ'
import { saveCol } from '../util/utils'

class Default {
	constructor(opt = {}) {
		this.barba = Barba.BaseView.extend({
			namespace: opt,
			onEnter: () => this.onEnter(),
			onEnterCompleted: () => this.onEnterCompleted(),
			onLeave: () => this.onLeave(),
			onLeaveCompleted: () => this.onLeaveCompleted(),
			onResize: (w, h) => this.onResize(w, h)
		})
		bind(this)
	}
	onEnter() {
		this.refs = choozy(this.barba.container)
		this.beforeMount && this.beforeMount()
		this.browser = detect()
	}
	onEnterCompleted() {
		// console.log('c-smooth', this.barba.container)
		// if (!config.isTouch) {
		// 	console.log('desktop')
		// 	this.smooth = new locomotiveScroll({
		// 		el: this.barba.container,
		// 		smooth: true
		// 	})

		// 	window.smooth = this.smooth

		// 	this.smooth.on('scroll', (e) => {
		// 		this.onSmoothScroll(e.delta)
		// 	})
		// }
		this.mounted && this.mounted()
		configQ(window.innerWidth)
		saveCol(window.innerWidth)
		// this.browser == 'safari'  ?select('header nav').style.transform = 'translateY(-4px)' :select('header nav').style.transform = ''
	}
	onLeave() {
		this.beforeDestroy && this.beforeDestroy()
		// this.smooth && this.smooth.destroy()
	}
	onLeaveCompleted() {
		this.destroyed && this.destroyed()
	}
	onResize(w, h) {
		this.resize && this.resize(w, h)
		configQ(w)
		saveCol(w)
	}
	onSmoothScroll(value) {
		this.onScroll && this.onScroll(value.y)
	}
}

export default Default
import Barba from 'barba.js'
import FastClick from 'fastclick'
import css from 'dom-css'
import config from '@/config'
import sections from '@/sections'
import transitionReducer from '@/transitions'
import Preloader from '@/components/Preloader'
import select from 'dom-select'



export default class Framework {
	constructor(App) {
		this.setup()
		this.init(App)
	}
	setup() {
		// Object.assign(config, sniffer.getInfos())
		config.isDevice && FastClick.attach(config.body)
		// scrollReset()
	}
	init(App) {
		this.app = new App()
		this.addEvents()
		this.initBarba()
		this.onResize()
		new Preloader()
	}
	addEvents() {
		window.addEventListener('resize', this.onResize)
		Barba.Dispatcher.on('linkClicked', this.onLinkClicked)
		Barba.Dispatcher.on('initStateChange', this.onInitStateChange)
		Barba.Dispatcher.on('newPageReady', this.onNewPageReady)
		Barba.Dispatcher.on('transitionCompleted', this.onTransitionCompleted)
	}

	initBarba() {
		sections.map(view => view.barba.init())
		Barba.Prefetch.init()
		Barba.Pjax.Dom.wrapperId = 'content'
		Barba.Pjax.Dom.containerClass = 'page'
		Barba.Pjax.getTransition = transitionReducer
		Barba.Pjax.start()
	}

	onResize = () => {
		config.width = window.innerWidth
		config.height = window.innerHeight
		this.traverse('onResize', config.width, config.height)
	}
	onLinkClicked = (...args) => {
		this.traverseApp('onLinkClicked', ...args)
	}
	onInitStateChange = (...args) => {
		css(config.html, {
			pointerEvents: 'none'
		})
		this.traverseApp('onInitStateChange', ...args)
	}
	onNewPageReady = (currentStatus, ...args) => {
		this.updateBodyClass()
		this.traverseApp('onNewPageReady', ...args)

		setTimeout(() => {
			const link = select('.page').dataset.part
			const siteUrl = window.location.pathname
			const navigation = document.querySelector('nav')
			const navigationLinks = [...navigation.querySelectorAll('.nav_item')]
			const navigationLinkIsActive = navigation.querySelector(`[href="/${link}"]`)
	
			console.log(link, siteUrl)
			navigationLinks.forEach((navigationLink) => {
				navigationLink.closest('.nav_item').classList.remove('nav_item_select')
			}) // remove CSS class 'is-active' from all .navigation__links
			if (navigationLinkIsActive) {
				navigationLinkIsActive.closest('.nav_item').classList.add('nav_item_select')
			}
		}, 100)// Set active links in Nav
	}
	onTransitionCompleted = (...args) => {
		css(config.html, {
			pointerEvents: 'auto'
		})
		this.traverseApp('onTransitionCompleted', ...args)
	}
	updateBodyClass() {
		config.body.classList.add(
			`is-${Barba.Pjax.History.currentStatus().namespace}`,
		)
		if (Barba.Pjax.History.prevStatus()) {
			config.body.classList.remove(
				`is-${Barba.Pjax.History.prevStatus().namespace}`,
			)
		}
	}
	traverseApp = (fn, ...args) => {
		typeof this.app[fn] === 'function' && this.app[fn](...args)
	}
	traverseViews = (fn, ...args) => {
		sections
			.filter(
				view =>
					Barba.HistoryManager.currentStatus() &&
				view.barba.namespace === Barba.HistoryManager.currentStatus().namespace,
			)
			.map(view => typeof view.barba[fn] === 'function' && view.barba[fn](...args))
	}
	traverse = (fn, ...args) => {
		this.traverseApp(fn, ...args)
		this.traverseViews(fn, ...args)
	}
}
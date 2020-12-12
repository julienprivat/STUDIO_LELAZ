import select from 'dom-select'
import TweenMax from 'gsap'
import { gsap } from "gsap"
import remove from 'dom-remove'
import { on, emit } from 'evx'
import preloader from 'preloader'

class Preloader {

	constructor() {
		this.cache()
		this.init()
	}

	cache() {

		this.header = select('.header')
		this.navItems = {
			get chars() {
				return document.querySelectorAll('.nav .nav_item');
			}
		}
		this.logo = select('.logo')
		this.section = select('.page')
		this.footer = select('footer')
		this.body = select('body')
		this.preloader = select('.preloader')

	}

	init() {

		this.logo.style.opacity = 0
		this.footer.style.opacity = 0
		this.section.style.opacity = 0
		this.section.style.transform = 'translate(0, 20px)'
		this.logo.style.transform = 'translate(0, 10px)'
		this.body.overflow = 'hidden'

		const timelineSettings = {
            staggerValue: 0.3,
            charsDuration: 0.4
		}

		window.addEventListener("load", () => {

			this.tl = gsap.timeline()

			.staggerTo( this.navItems.chars, 0, {
				opacity: 0,
				y: 10,
			}, 0)

			.add('start')

			.to(this.preloader, {
				duration : 0.5,
				width: 0,
				ease: 'Power1.out',
			}, 'start+=0.2')

			.to(this.logo, {
				duration : 0.4,
				opacity: 1,
				y: 0,
				ease: 'Power3.in',
			}, 'start+=0.4')

			// Stagger the animation of the home section chars
			.staggerTo( this.navItems.chars, timelineSettings.charsDuration, {
				ease: 'Power3.in',
				y: 0,
				opacity: 1,
			}, timelineSettings.staggerValue, 'start+=0.5')

			.to(this.section, {
				ease: 'Power3.in',
				duration: 0.6,
				y: 0,
				opacity: 1,
			}, 'start+=1')

			.to(this.footer, {
				ease: 'Power3.out',
				duration: 0.6,
				opacity: 1,
			}, 'start+=1')

		});


		// var preloader = require('preloader')
		// let loader = preloader({
		// 	xhrImages: false
		//   });
		// console.log(loader)
		// loader.on('progress',(progress) => {
		// 	console.log(progress);
		//   });
		// loader.on('complete', () => {
		// 	// var data = loader.get('site_data.json');
		// 	console.log('all content loaded!')
		//   });
		//   const images = [...document.querySelectorAll('.img')]
		//   images.forEach((image) => {
		// 	  loader.add(image)
		//   })
		//   loader.load();
	}

	destroy() {

		remove(this.preloader)

	}
}

export default Preloader
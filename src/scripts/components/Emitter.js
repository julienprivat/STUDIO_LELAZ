import { on, emit } from 'evx'
import select from 'dom-select'
import classes from 'dom-classes'
import bind from 'es6-class-bind-all'

class Emitter {
	constructor() {
		bind(this)

		this.cache()
		this.init()
	}
	cache() {
		this.navbar = select('nav')
	}
	init() {
		/* When foo is called bro */
		on('toggleNavbar', this.toggleNavbar)
	}
	toggleNavbar() {
		classes.has(this.navbar, 'is-visible')
			? classes.remove(this.navbar, 'is-visible')
			: classes.add(this.navbar, 'is-visible')
	}
}

export default Emitter
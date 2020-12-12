import Default from './default'
import select from 'dom-select'
import configQ from '@/util/func/configQ'
import config from '@/config'
import event from 'dom-event'
import PerfectScrollbar from 'perfect-scrollbar';
import TweenMax from 'gsap'
import { gsap } from "gsap"
import Flickity from 'flickity'
import $ from 'jquery'





class Projets extends Default {
	constructor() {
		super('projets')
	}
	mounted() {

        configQ(window.innerWidth)
        this.cache()
        this.showNav()
        this.init()

    }

    cache() {

        this.listButton = select('.nav_projects_item_list')
        this.imageButton = select('.nav_projects_item_image')
        this.navButton = [...document.querySelectorAll('.nav_projects_categories .nav_projects_item')]

        this.wall = select('.wall')
        this.table = select('.table')

        this.wallItems = {
			get chars() {
				return document.querySelectorAll('.wall_item');
			}
        }

        this.itemsWall = [...document.querySelectorAll('.wall_item')]
        this.itemsTable = [...document.querySelectorAll('.project')]

        this.quidWall = true
        this.heightVisualPart

    }

    init() {

        this.saveSize()
        this.addEvents('on')

    }

    addEvents(type) {

        !config.isSmall && $(window).on('scroll', this.saveNavPosition)

        event[type](this.listButton, 'click', this.openList)
        event[type](this.imageButton, 'click', this.openWall)

        this.navButton.forEach((item) => {
            event[type](item, 'click', this.handlerNav)
        })

    }

    showNav() {

	    const navItems = [...document.querySelectorAll('.nav_projects_item')]

        this.tl = gsap.timeline()
        .add('show')
        .staggerTo( navItems, 0.25, {
            ease: 'Power3.in',
            y: 0,
            opacity: 1,
        }, 0.1, 'show')

        .staggerTo( this.itemsWall, 0.25, {
            ease: 'Power3.in',
            x: 0,
            opacity: 1,
        }, 0.1, 'show+=0.5')



    }

    saveNavPosition(e) {

        const footerTop    = select('.footer_top').getBoundingClientRect().top,
              visualPart   = select('.visual_part').getBoundingClientRect().height,
              windowHeight = window.innerHeight,
              reste        = windowHeight - 200 - 49 - visualPart,
              scroll       = parseInt($(window).scrollTop()),
              imageBottom  = select('.visual_part').getBoundingClientRect().bottom

            if (scroll > 49 &&  top - imageBottom > 0) {

                select('.visual_part').setAttribute('style', `top: ${scroll - 49}px`)

            } else if (footerTop - windowHeight + reste < 0 ) {

                select('.visual_part').setAttribute('style', 'bottom: 0px')

            } else {

                select('.visual_part').setAttribute('style', `top: ${scroll}px`)

            }

    }

    handlerNav(e) {

        const cat = e.target.closest('.nav_projects_item').id,
              quidSelect = e.target.closest('.nav_projects_item').classList.contains('nav_projects_item_select')

        if (!quidSelect) {

            cat == 'all' ? this.showAll() : this.showCat(cat)

        }
    }

    saveSize() {

        this.wall.style.height = this.wall.offsetHeight + 'px'
        this.wallItemWidth = select('.page').getBoundingClientRect().width / 4
        this.wallItemHeight = window.innerHeight / 3
        this.tableItemHeight = 50.89
        this.select = [...document.querySelectorAll('.project_select')]
        this.select.forEach((item) => {
            item.style.width = this.wallItemWidth
        })

    }

    showAll() {

        const lengthSelect = this.itemsWall.length,
              heightWall = (this.wallItemHeight + 50) * Math.ceil(lengthSelect / 4)

        const lengthSelectTable = this.itemsTable.length,
              heightTable = this.tableItemHeight  * lengthSelectTable + 36.9

        this.itemsTable.forEach((item) => {
            item.classList.add('project_select')
        })
        this.itemsWall.forEach((item) => {
            item.classList.add('project_select')
        })

        this.tl = gsap.timeline()
            .add('hide')
            .staggerTo( this.itemsWall, 0.2, {
                ease: 'Power3.in',
                x: -30,
                opacity: 0,
            }, 0.02, 'hide')
            .staggerTo(this.itemsTable, 0.2, {
                x: -30,
                opacity: 0,
            }, 0.02, 'hide')

            .add('container')
            .to( this.wall, {
                ease: 'Power3.in',
                duration: 0.4,
                height: heightWall,
            }, 'container')
            .to( this.table, {
                ease: 'Power3.in',
                duration: 0.4,
                height: heightTable,
            }, 'container')

            .add('init')
            .to( this.itemsWall, {
                ease: 'Power3.in',
                duration: 0,
                width: '25%',
                height: 'calc(100vh / 3)',
                padding: 35,
            }, 'disapear')
            .to( this.itemsTable, {
                ease: 'Power3.in',
                border: '1px solid #0A1E32',
                duration: 0,
                height: this.tableItemHeight,
            }, 'disapear')


            .add('show')
            .staggerTo( this.itemsWall, 0.2, {
                ease: 'Power3.in',
                x: 0,
                opacity: 1,
            }, 0.02, 'show')
            .staggerTo(this.itemsTable, 0.2, {
                x: 0,
                opacity: 1,
            }, 0.02, 'show')

            const navItemSelect = select('#all'),
              oldItemSelect = select('.nav_projects_item_select')

            oldItemSelect.classList.remove('nav_projects_item_select')
            navItemSelect.classList.add('nav_projects_item_select')

    }

    showCat(cat) {

        const quidAll = select('.nav_projects_item_select').id == 'all',
              falseWallItems = this.itemsWall.filter( item => item.dataset.cat !== cat ),
              falseTableItems = this.itemsTable.filter( item => item.dataset.cat !== cat ),
              trueWallItems = this.itemsWall.filter( item => item.dataset.cat == cat ),
              trueTableItems = this.itemsTable.filter( item => item.dataset.cat == cat ),
              oldSelect = [...document.querySelectorAll('.project_select')]

        const lengthSelect = trueWallItems.length,
              heightWall = (this.wallItemHeight + 50)  * Math.ceil(lengthSelect / 4)

        const lengthSelectTable = trueTableItems.length,
        heightTable = this.tableItemHeight * lengthSelectTable + 36.9

        oldSelect.forEach((item) => {
            item.classList.remove('project_select')
        })
        trueTableItems.forEach((item) => {
            item.classList.add('project_select')
        })
        trueWallItems.forEach((item) => {
            item.classList.add('project_select')
        })

            this.tl = gsap.timeline()
            .add('hide')
            .staggerTo( this.itemsWall, 0.2, {
                ease: 'Power3.in',
                x: -30,
                opacity: 0,
            }, 0.02, 'hide')
            .staggerTo(this.itemsTable, 0.2, {
                x: -30,
                opacity: 0,
            }, 0.02, 'hide')

            .add('disapear')
            .to( this.itemsWall, {
                ease: 'Power3.in',
                duration: 0,
                width: '25%',
                height: 'calc(100vh / 3)',
                padding: 35,
            }, 'disapear')
            .to( this.itemsTable, {
                ease: 'Power3.in',
                duration: 0,
                border: '1px solid #0A1E32',
                height: this.tableItemHeight,
            }, 'disapear')

            .to( falseWallItems, {
                ease: 'Power3.in',
                duration: 0,
                width: 0,
                height: 0,
                padding: 0,
            }, 'disapear')
            .to( falseTableItems, {
                duration: 0.4,
                height: 0,
                border: 0,
            }, 'disapear')

            .to( this.wall, {
                ease: 'Power3.in',
                duration: 0.4,
                height: heightWall,
            }, 'disapear')
            .to( this.table, {
                ease: 'Power3.in',
                duration: 0.4,
                height: heightTable,
            }, 'disapear')

            .add('appear')
            .staggerTo( trueWallItems, 0.3, {
                ease: 'Power3.in',
                x: 0,
                opacity: 1,
            }, 0.02, 'appear')
            .staggerTo( trueTableItems, 0.3, {
                ease: 'Power3.in',
                x: 0,
                opacity: 1,
            }, 0.02, 'appear')



        const navItemSelect = select('#' + cat),
              oldItemSelect = select('.nav_projects_item_select')

        oldItemSelect.classList.remove('nav_projects_item_select')
        navItemSelect.classList.add('nav_projects_item_select')


    }

    openList() {

        if (this.quidWall) {

            const select = [...document.querySelectorAll('.project.project_select')],
                  lengthSelect = select.length,
                  heightTable = this.tableItemHeight * lengthSelect + 36.9,
                  heightWall = this.wall.offsetHeight

            console.log(heightTable, heightWall )


            this.tl = gsap.timeline()
            .staggerTo( this.wallItems.chars, 0.2, {
                ease: 'Power3.in',
                x: -30,
                opacity: 0,
            }, 0.02)

            .add('init')
            .to(this.table, {
                duration: 0,
                opacity: 0,
                x: -30,
                height: heightWall,
                display: 'block'
            }, 'init')
            .to(this.wall, {
                duration: 0,
                display: 'none'
            }, 'init')

            .to( this.table, {
                duration: 0.4,
                opacity: 1,
                height: heightTable,
                x: 0,
                ease: 'Power3.in'
            })

        }

        this.quidWall = false
        this.imageButton.classList.remove('nav_projects_item_select')
        this.listButton.classList.add('nav_projects_item_select')

    }


    openWall() {

        if(!this.quidWall) {

            const select = [...document.querySelectorAll('.wall_item.project_select')],
                  lengthSelect = select.length,
                  heightWall = (this.wallItemHeight + 50) * Math.ceil(lengthSelect / 4),
                  heightTable = this.table.offsetHeight

            console.log(lengthSelect,  Math.ceil(lengthSelect / 4), this.wallItemHeight)

            this.tl = gsap.timeline()

            .to( this.table, {
                duration: 0.4,
                opacity: 0,
                x : -30,
                ease: 'Power3.in'
            })


            .add('init')
            .to(this.table, {
                duration: 0,
                height: 0,
                display: 'none'
            }, 'init')
            .to(this.wall, {
                duration: 0,
                height: heightTable,
                display: 'flex',
            }, 'init')

            .to(this.wall, {
                duration: 0.4,
                height: heightWall,
            }, 'init')

            .staggerTo( this.wallItems.chars, 0.2, {
                ease: 'Power3.in',
                x: 0,
                opacity: 1,
            }, 0.02, 'init+=0.6')

        }

        this.quidWall = true
        this.listButton.classList.remove('nav_projects_item_select')
        this.imageButton.classList.add('nav_projects_item_select')

    }

	beforeDestroy() {

        this.addEvents('off')
        !config.isSmall && $(window).off('scroll', this.saveNavPosition)

    }

	resize(w) {

        configQ(window.innerWidth)
        this.saveSize()

	}
}

export default Projets
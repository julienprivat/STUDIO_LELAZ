import config from '@/config'
import select from 'dom-select'

export function saveCol(w) {
    if ( w < 800 ) {
        config.col = 1
    } else if ( w > 800 && w < 1000 ) {
        config.col = 3
    } else if ( w > 1000 && w < 1300 ) {
        config.col = 3
    } else if ( w > 1300 && w < 1700 ) {
        config.col = 4
    } else {
        config.col = 5
    }
    let main = select('#content')
    main.setAttribute('style', '--col: ' + config.col)
    return config.col
}

export function lazyload(image) {

    image.src = image.dataset.src
	image.classList.remove('lazyload')

}

export function quidVerticalImage(image) {

    let height = image.height,
        width = image.width,
        ratio = height / width,
        quid = ''

    ratio > 1
    ? quid = 'vertical'
    : quid = 'horizontal'
    image.classList.add(`${quid}-image`)

}
import config from '@/config'
export default (w) => {
    w < 800 || document.querySelector('html').classList.contains('mobile')
        ? config.isSmall = true
        : config.isSmall = false
    return config.isTwo
}
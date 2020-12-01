export default (el, selector) => {

	function closest(el, selector) {
        if(el && el.nodeType === 1){
            if(matches(el, selector)){
                return el
            }
            return closest(el.parentNode, selector)
        }
        return null
    }
}
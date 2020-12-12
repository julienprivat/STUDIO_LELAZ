import TweenMax from 'gsap'
import { gsap } from "gsap"
import select from 'dom-select'
import config from '../config'
import configQ from '../util/func/configQ'
import ImagePreloader from 'image-preloader'
import PromiseDelay from 'promise-ext-delay'

export default function fade(oldContainer, newContainer, done) {


	newContainer.style.opacity = 0
	select('footer').style.opacity = 0


	let tl = gsap.timeline()

		tl.add('up')
		tl.to(oldContainer, {
			opacity: 0,
			duration: 0.2,
			ease: 'expo.easeInOut',
			onComplete: () => {
                change()}
		},'up')

		tl.to(oldContainer, {
			height: 0,
			margin: 0,
			duration: 0,
			display: 'none',
			ease: 'expo.easeInOut',
			onComplete: () => {
                quidPreloade()}
		})


		function quidPreloade() {

			PromiseDelay()

            var preloader = new ImagePreloader(),
                images = Array.prototype.slice.call(document.getElementsByTagName('img')),
                total = images.length,
                loaded = 0,
                progress = select('.progress_bar')
            
            progress.style.opacity = 1;

            preloader.onProgress = () => {
                progress.style.width = parseInt(100 / total * ++loaded) + '%'
            }

            preloader.preload(images)
                .delay(500)
                .then((result) => {
					console.log(result)
					progress.style.opacity = 0;
                            progress.style.width = 0;

                            tl = gsap.timeline()
                            .to(newContainer, {
                                ease: 'Power3.in',
                                duration: 0.6,
                                y: 0,
                                opacity: 1,
							}, )

                            .to(select('footer'), {
                                ease: 'Power3.out',
                                duration: 0.6,
								opacity: 1,
								onComplete: () => {
									end()}
                            },)

                    result.forEach((image) =>  {
                        if (image.status) {
                            // container.appendChild(image.value);
                            image.value.classList.add('img-rounded', 'loaded');
                        }
                    })
                });
		}

		function end() {
			done()
		}

		function change() {
			newContainer.style.visibility = 'visible';
		}

	return tl

}
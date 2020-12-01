import anime from 'animejs'

export default function fade(oldContainer, newContainer, done) {
	const newPart = newContainer.dataset.part
	oldContainer.dataset.part = newPart
	return anime({
		targets: oldContainer,
		duration: 500,
		opacity: 0,
		easing: 'easeOutCubic',
	})
		.finished.then(() => {
			oldContainer.style.display = 'none'
			newContainer.style.opacity = 0
			newContainer.style.visibility = 'visible'
			// scrollZero()
			// if (!window.smooth) {
			// 	window.scrollTo(0, 0, 0)
			// }
		})
		.then(
			() =>
				anime({
					targets: newContainer,
					duration: 500,
					opacity: 1,
					easing: 'easeOutCubic',
				}).finished,
		)
		.then(done)
}
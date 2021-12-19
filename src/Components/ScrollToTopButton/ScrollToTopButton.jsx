import React, { useState, useEffect } from 'react'

// components

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// styling
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
	const [IsShowing, SetIsShowing] = useState(false)

	useEffect(() => {
		AOS.init({
			duration: 1000,
		})

		window.addEventListener('scroll', () => {
			if (window.scrollY >= 30) {
				SetIsShowing(true)
			} else {
				SetIsShowing(false)
			}
		})
	}, [])

	const ScrollToTop = () => {
		window.scrollTo(window.scrollX, 0, { behavior: 'smooth' })
	}

	return (
		<>
			{IsShowing && (
				<div
					data-aos='fade-up'
					className='scroll-to-top-button'
					onClick={ScrollToTop}
				>
					<div className='wrap'>
						<FontAwesomeIcon icon={faArrowUp} />
					</div>
				</div>
			)}
		</>
	)
}

export default ScrollToTopButton

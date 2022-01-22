import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollToTopButtonContainer = styled.div`
	width: clamp(20px, 50px, 60px);
	height: clamp(20px, 50px, 60px);
	opacity: 0.4;
	background-color: #9b9b9b;
	position: fixed;
	bottom: 25px;
	right: 25px;
	cursor: pointer;
`

const ScrollToTopButtonWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	opacity: 1;
`

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
				<ScrollToTopButtonContainer
					data-aos='fade-up'
					onClick={ScrollToTop}
				>
					<ScrollToTopButtonWrapper>
						<FontAwesomeIcon icon={faArrowUp} />
					</ScrollToTopButtonWrapper>
				</ScrollToTopButtonContainer>
			)}
		</>
	)
}

export default ScrollToTopButton

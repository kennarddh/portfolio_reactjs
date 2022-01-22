import React, { useEffect } from 'react'

import styled from 'styled-components'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const InnerCardContainer = styled.a`
	position: relative;
	text-decoration: none;
	color: white;
`

const InnerCardImage = styled.img`
	width: 285px;
	height: 145px;
`

const InnerCardTitle = styled.p`
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 10;
	margin: 0;
`

const InnerCard = ({ imageLocation, imageAlt, title, link }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, [])

	return (
		<>
			<InnerCardContainer href={link} data-aos='fade-up'>
				<InnerCardImage src={imageLocation} alt={imageAlt} />
				<InnerCardTitle>{title}</InnerCardTitle>
			</InnerCardContainer>
		</>
	)
}

export default InnerCard

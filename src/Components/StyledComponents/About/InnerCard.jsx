import React, { useEffect } from 'react'

import styled from 'styled-components'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const InnerCardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 25px;
	margin: 0 20px;
`

const InnerCardImage = styled.img`
	width: 50px;
	height: 50px;
`

const InnerCard = ({ imageLocation, imageAlt, title }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, [])

	return (
		<>
			<InnerCardContainer data-aos='fade-up'>
				<InnerCardImage
					src={imageLocation}
					alt={imageAlt}
				/>
				<p>{title}</p>
			</InnerCardContainer>
		</>
	)
}

export default InnerCard

import React, { useEffect } from 'react'

import styled from 'styled-components'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 25px;
	margin: 0 20px;
`

const CardImage = styled.img`
	width: 50px;
	height: 50px;
`

const Card = ({ imageLocation, imageAlt, title }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, [])
	return (
		<>
			<CardContainer data-aos='fade-up'>
				<CardImage src={imageLocation} alt={imageAlt} />
				<p>{title}</p>
			</CardContainer>
		</>
	)
}

export default Card

import React from 'react'

import styled from 'styled-components'

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 25px;
`

const CardTitle = styled.h3`
	width: 100%;
	font-size: 25px;
	margin-bottom: 20px;
`

const Card = ({ children, title }) => {
	return (
		<>
			<div className='about-card'>
				<CardTitle>{title}</CardTitle>
				<CardBody>{children}</CardBody>
			</div>
		</>
	)
}

export default Card

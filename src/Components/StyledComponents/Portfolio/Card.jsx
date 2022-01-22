import React from 'react'

import styled from 'styled-components'

const CardBody = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	gap: 25px;
	flex-wrap: wrap;
`

const CardTitle = styled.h3`
	width: 100%;
	font-size: 25px;
	margin-bottom: 20px;
	text-align: center;
`

const Card = ({ children, title }) => {
	return (
		<>
			<div className='portfolio-card'>
				<CardTitle>{title}</CardTitle>
				<CardBody>{children}</CardBody>
			</div>
		</>
	)
}

export default Card

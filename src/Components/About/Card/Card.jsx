import React from 'react'

// components

// styling
import './Card.css'

const Card = props => {
	return (
		<>
			<div className='about-card'>
				<h3 className='title'>{props.Name}</h3>
				<div className='body'>{props.children}</div>
			</div>
		</>
	)
}

export default Card

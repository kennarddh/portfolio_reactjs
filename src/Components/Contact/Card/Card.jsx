import React, { useEffect } from 'react'

// components

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// styling
import './Card.css'

const InnerCard = props => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, [])

	return (
		<>
			<div data-aos='fade-up' className='contact-card'>
				<img
					src={props.ImageLocation}
					alt={props.ImageAlt}
					className='image'
				/>
				<p className='name'>{props.Name}</p>
			</div>
		</>
	)
}

export default InnerCard

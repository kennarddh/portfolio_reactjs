import React, { useEffect } from 'react'

// components

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// styling
import './InnerCard.css'

const InnerCard = props => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, [])

	return (
		<>
			<a href={props.Link} data-aos='fade-up' className='portfolio-inner-card'>
				<img
					src={props.ImageLocation}
					alt={props.ImageAlt}
					className='image'
				/>
				<p className='name'>{props.Name}</p>
			</a>
		</>
	)
}

export default InnerCard

import React, { useState } from 'react'

// components

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

// styling
import './Navbar.css'

const Navbar = () => {
	const [IsShowResposiveNav, SetIsShowResposiveNav] = useState(false)

	const ToggleIsShowResposiveNav = () => {
		SetIsShowResposiveNav(!IsShowResposiveNav)
	}

	return (
		<>
			<nav className='navbar'>
				<a href='/' className='name'>
					Name
				</a>
				{IsShowResposiveNav ? (
					<FontAwesomeIcon
						icon={faTimes}
						className='bars'
						onClick={ToggleIsShowResposiveNav}
					/>
				) : (
					<FontAwesomeIcon
						icon={faBars}
						className='bars'
						onClick={ToggleIsShowResposiveNav}
					/>
				)}
				<div
					className={`link${IsShowResposiveNav ? ' responsive' : ''}`}
				>
					<div
						className={`left${
							IsShowResposiveNav ? ' responsive' : ''
						}`}
					>
						<a href='/#proficiencies' className='item'>
							Skills
						</a>
						<a href='/#portfolio' className='item'>
							Portfolio
						</a>
					</div>
					<div
						className={`right${
							IsShowResposiveNav ? ' responsive' : ''
						}`}
					>
						<a href='/#about' className='item'>
							About
						</a>
						<a href='/#contact' className='item'>
							Contact
						</a>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar

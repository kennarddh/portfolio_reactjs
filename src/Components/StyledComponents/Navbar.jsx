import React, { useState } from 'react'

import styled, { css } from 'styled-components'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

// Constants
import { size } from 'Constants/DeviceSize'

const NavbarContainer = styled.div`
	background-color: #272527;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 10px 20px;
	z-index: 9998;
	gap: 20px;
	position: relative;

	@media (max-width: ${size.mobileL}) {
		${props =>
			props.isShowResposiveNav &&
			css`
				flex-direction: column;
			`}
	}
`

const NavbarTitle = styled.a`
	color: white;
	text-decoration: none;
	position: relative;
	font-size: 20px;
`

const NavbarResponsiveIcon = styled(FontAwesomeIcon)`
	height: 50px;
	position: absolute;
	top: 0;
	right: 20px;
	padding: 10px;
	display: none;
	z-index: 20;
	color: white;

	@media (max-width: ${size.mobileL}) {
		display: block;
	}
`

const NavbarLink = styled.div`
	width: calc(100% - 70px);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	z-index: 9998;
	gap: 20px;

	@media (max-width: ${size.mobileL}) {
		display: none;

		${props =>
			props.isShowResposiveNav &&
			css`
				display: flex;
				flex-direction: column;
				margin: 0;
				width: 100%;
				padding: 0;
			`}
	}
`

const NavbarItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	gap: 20px;

	@media (max-width: ${size.mobileL}) {
		${props =>
			props.isShowResposiveNav &&
			css`
				flex-direction: column;
			`}
	}
`

const NavbarItem = styled.a`
	color: #d3d3d3;
	text-decoration: none;
	position: relative;
	font-size: 15px;
`

const Navbar = () => {
	const [IsShowResposiveNav, SetIsShowResposiveNav] = useState(false)

	const ToggleIsShowResposiveNav = () => {
		SetIsShowResposiveNav(!IsShowResposiveNav)
	}

	return (
		<>
			<NavbarContainer isShowResposiveNav={IsShowResposiveNav}>
				<NavbarTitle href='/'>Name</NavbarTitle>
				{IsShowResposiveNav ? (
					<NavbarResponsiveIcon
						icon={faTimes}
						onClick={ToggleIsShowResposiveNav}
					/>
				) : (
					<NavbarResponsiveIcon
						icon={faBars}
						onClick={ToggleIsShowResposiveNav}
					/>
				)}
				<NavbarLink isShowResposiveNav={IsShowResposiveNav}>
					<NavbarItemContainer
						isShowResposiveNav={IsShowResposiveNav}
					>
						<NavbarItem href='/#proficiencies'>Skills</NavbarItem>
						<NavbarItem href='/#portfolio'>Portfolio</NavbarItem>
					</NavbarItemContainer>
					<NavbarItemContainer
						isShowResposiveNav={IsShowResposiveNav}
					>
						<NavbarItem href='/#about'>About</NavbarItem>
						<NavbarItem href='/#contact'>Contact</NavbarItem>
					</NavbarItemContainer>
				</NavbarLink>
			</NavbarContainer>
		</>
	)
}

export default Navbar

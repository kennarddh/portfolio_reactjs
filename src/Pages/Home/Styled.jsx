import styled from 'styled-components'

import { size } from 'Constants/DeviceSize'

// Home
export const HomeContainer = styled.section`
	background-color: #272527;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 100px 20px 150px 20px;
	gap: 60px;

	@media (max-width: ${size.laptop}) {
		flex-direction: column;
		gap: 20px;
	}
`

export const HomeImage = styled.img`
	border-radius: 50%;
	width: 285px;

	@media (max-width: ${size.laptop}) {
		width: 215px;
	}
`

export const HomeText = styled.div`
	color: white;
	width: 285px;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;

	@media (max-width: ${size.laptop}) {
		align-items: center;
	}
`

export const HomeTitle = styled.h1`
	margin-bottom: 10px;
	font-size: 50px;
`

export const HomeDescription = styled.div`
	@media (max-width: ${size.laptop}) {
		display: flex;
		align-items: center;
		justify-self: center;
		flex-direction: column;
		text-align: center;
	}
`

export const HomeDescriptionItem = styled.p`
	margin: 20px 0;
`

// Proficiencies

export const ProficienciesContainer = styled.section`
	background-color: #1b1b1b;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 25px 50px;
	color: white;
	gap: 100px;

	@media (max-width: ${size.laptop}) {
		flex-direction: column;
		text-align: center;
	}
`

export const ProficienciesTitle = styled.h2`
	width: 25%;
	font-size: 40px;
	margin: 0;

	@media (max-width: ${size.laptop}) {
		width: 100%;
	}
`

export const ProficienciesBody = styled.div`
	width: 75%;
	display: grid;
	grid-template-columns: repeat(2, 40%);
	column-gap: 100px;
	row-gap: 75px;

	@media (max-width: ${size.laptop}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
`

// Portfolio

export const PortfolioContainer = styled.section`
	background-color: #272527;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 25px 50px;
	color: white;
	gap: 50px;
`

export const PortfolioTitle = styled.h2`
	font-size: 40px;
	margin: 0;
`

export const PortfolioBody = styled.div`
	display: grid;
	grid-template-columns: 100%;
	column-gap: 100px;
	row-gap: 75px;
`

// About

export const AboutContainer = styled.section`
	background-color: #1b1b1b;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 25px 50px;
	color: white;
	gap: 100px;

	@media (min-width: ${size.laptop}) {
		min-height: 90vh;
	}

	@media (max-width: ${size.laptop}) {
		flex-direction: column;
		text-align: center;
	}
`

export const AboutTitle = styled.h2`
	width: 25%;
	font-size: 40px;
	margin: 0;

	@media (max-width: ${size.laptop}) {
		width: 100%;
	}
`

export const AboutBody = styled.div`
	width: 75%;
	display: grid;
	grid-template-columns: repeat(2, 40%);
	column-gap: 100px;
	row-gap: 75px;

	@media (max-width: ${size.laptop}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
`

// Contact

export const ContactContainer = styled.section`
	background-color: #272527;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 80vh;

	@media (max-width: ${size.laptop}) {
		min-height: 90vh;
	}

	@media (orientation: landscape) and (max-width: ${size.laptop}) {
		height: 170vh;
	}
`

export const ContactWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;
`

export const ContactTitle = styled.h2`
	font-size: 40px;
	margin: 0;
`

export const ContactBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`

export const All = {
	Home: {
		Container: HomeContainer,
		Image: HomeImage,
		Text: HomeText,
		Title: HomeTitle,
		Description: HomeDescription,
		DescriptionItem: HomeDescriptionItem,
	},
	Proficiencies: {
		Container: ProficienciesContainer,
		Title: ProficienciesTitle,
		Body: ProficienciesBody,
	},
	Portfolio: {
		Container: PortfolioContainer,
		Title: PortfolioTitle,
		Body: PortfolioBody,
	},
	About: {
		Container: AboutContainer,
		Title: AboutTitle,
		Body: AboutBody,
	},
	Contact: {
		Container: ContactContainer,
		Wrap: ContactWrap,
		Title: ContactTitle,
		Body: ContactBody,
	},
}

export default All

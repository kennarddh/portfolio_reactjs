import React from 'react'

// utils
import Title from 'Utils/Title'

// components
import Navbar from 'Components/StyledComponents/Navbar'
import ScrollToTopButton from 'Components/StyledComponents/ScrollToTopButton'

// proficiencies
import ProficienciesCard from 'Components/StyledComponents/Proficiencies/Card'
import ProficienciesInnerCard from 'Components/StyledComponents/Proficiencies/InnerCard'

// portfolio
import PortfolioCard from 'Components/StyledComponents/Portfolio/Card'
import PortfolioInnerCard from 'Components/StyledComponents/Portfolio/InnerCard'

// about
import AboutCard from 'Components/StyledComponents/About/Card'
import AboutInnerCard from 'Components/StyledComponents/About/InnerCard'

// contact
import ContactCard from 'Components/StyledComponents/Contact/Card'

// Styled Components
import Styled from './Styled'

const Home = () => {
	Title('Home')

	return (
		<>
			<Navbar />
			<Styled.Home.Container>
				<Styled.Home.Image
					src='assets/image/no-image.jpeg'
					alt='profile'
				/>
				<Styled.Home.Text>
					<Styled.Home.Title>Kennard</Styled.Home.Title>
					<Styled.Home.Description>
						<Styled.Home.DescriptionItem>
							fullstack software enginer
						</Styled.Home.DescriptionItem>
					</Styled.Home.Description>
				</Styled.Home.Text>
			</Styled.Home.Container>
			<Styled.Proficiencies.Container id='proficiencies'>
				<Styled.Proficiencies.Title>
					Proficiencies
				</Styled.Proficiencies.Title>
				<Styled.Proficiencies.Body>
					<ProficienciesCard title='Front End'>
						<ProficienciesInnerCard
							imageLocation='assets/image/logo/javascript.png'
							imageAlt='javascript'
							title='javascript'
						/>
						<ProficienciesInnerCard
							imageLocation='assets/image/logo/reactjs.png'
							imageAlt='react js'
							title='react js'
						/>
						<ProficienciesInnerCard
							imageLocation='assets/image/logo/bootstrap.svg'
							imageAlt='bootstrap'
							title='bootstrap'
						/>
					</ProficienciesCard>
					<ProficienciesCard title='Back End'>
						<ProficienciesInnerCard
							imageLocation='assets/image/logo/php.png'
							imageAlt='php'
							title='php'
						/>
					</ProficienciesCard>
					<ProficienciesCard title='Other'>
						<ProficienciesInnerCard
							imageLocation='assets/image/logo/mariadb.png'
							imageAlt='mysql'
							title='mysql'
						/>
					</ProficienciesCard>
				</Styled.Proficiencies.Body>
			</Styled.Proficiencies.Container>
			<Styled.Portfolio.Container id='portfolio'>
				<Styled.Portfolio.Title>Portfolio</Styled.Portfolio.Title>
				<Styled.Portfolio.Body>
					<PortfolioCard title='Web Site'>
						<PortfolioInnerCard
							link=''
							imageLocation='assets/image/no-image-dark.jpeg'
							imageAlt='card image'
							title='Lorem'
						/>
					</PortfolioCard>
				</Styled.Portfolio.Body>
			</Styled.Portfolio.Container>
			<Styled.About.Container id='about'>
				<Styled.About.Title>About</Styled.About.Title>
				<Styled.About.Body>
					<AboutCard title='Education'>
						<AboutInnerCard
							imageLocation='assets/image/no-image.jpeg'
							imageAlt='card image'
							title='Lorem'
						/>
					</AboutCard>
					<AboutCard title='Experiences'>
						<AboutInnerCard
							imageLocation='assets/image/no-image.jpeg'
							imageAlt='card image'
							title='Lorem'
						/>
					</AboutCard>
				</Styled.About.Body>
			</Styled.About.Container>
			<Styled.Contact.Container>
				<Styled.Contact.Wrap>
					<Styled.Contact.Title id='contact'>
						Reach Me on
					</Styled.Contact.Title>
					<Styled.Contact.Body>
						<ContactCard
							imageLocation='assets/image/logo/github.png'
							imageAlt='Github'
							title='Github'
						/>
					</Styled.Contact.Body>
				</Styled.Contact.Wrap>
			</Styled.Contact.Container>
			<ScrollToTopButton />
		</>
	)
}

export default Home

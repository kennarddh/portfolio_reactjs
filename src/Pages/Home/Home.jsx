import React from 'react'

// utils
import Title from '../../Utils/Title'

// components
import Navbar from '../../Components/Navbar/Navbar'
import ScrollToTopButton from '../../Components/ScrollToTopButton/ScrollToTopButton'

// proficiencies
import ProficienciesCard from '../../Components/Proficiencies/Card/Card'
import ProficienciesInnerCard from '../../Components/Proficiencies/InnerCard/InnerCard'

// portfolio
import PortfolioCard from '../../Components/Portfolio/Card/Card'
import PortfolioInnerCard from '../../Components/Portfolio/InnerCard/InnerCard'

// about
import AboutCard from '../../Components/About/Card/Card'
import AboutInnerCard from '../../Components/About/InnerCard/InnerCard'

// contact
import ContactCard from '../../Components/Contact/Card/Card'

// styling
import './Home.css'

const Home = () => {
	Title('Home')

	return (
		<>
			<Navbar />
			<section className='home'>
				<img
					src='assets/image/no-image.jpeg'
					alt='profile'
					className='image'
				/>
				<div className='text'>
					<h1 className='title'>Name</h1>
					<div className='description'>
						<p className='item'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit.
						</p>
						<p className='item'>Lorem, ipsum dolor.</p>
					</div>
				</div>
			</section>
			<section className='proficiencies' id='proficiencies'>
				<h2 className='title'>Proficiencies</h2>
				<div className='body'>
					<ProficienciesCard Name='Front End'>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
					</ProficienciesCard>
					<ProficienciesCard Name='Back End'>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
					</ProficienciesCard>
					<ProficienciesCard Name='Other'>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<ProficienciesInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
					</ProficienciesCard>
				</div>
			</section>
			<section className='portfolio' id='portfolio'>
				<h2 className='title'>Portfolio</h2>
				<div className='body'>
					<PortfolioCard Name='Web Site'>
						<PortfolioInnerCard
							Link=''
							ImageLocation='assets/image/no-image-dark.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<PortfolioInnerCard
							Link=''
							ImageLocation='assets/image/no-image-dark.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<PortfolioInnerCard
							Link=''
							ImageLocation='assets/image/no-image-dark.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
					</PortfolioCard>
					<PortfolioCard Name='Analytics'>
						<PortfolioInnerCard
							Link=''
							ImageLocation='assets/image/no-image-dark.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<PortfolioInnerCard
							Link=''
							ImageLocation='assets/image/no-image-dark.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
					</PortfolioCard>
				</div>
			</section>
			<section className='about' id='about'>
				<h2 className='title'>About</h2>
				<div className='body'>
					<AboutCard Name='Education'>
						<AboutInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<AboutInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
					</AboutCard>
					<AboutCard Name='Experiences'>
						<AboutInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<AboutInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
						<AboutInnerCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='Lorem'
						/>
					</AboutCard>
				</div>
			</section>
			<section className='contact'>
				<div className='wrap'>
					<h2 className='title' id='contact'>Reach Me on</h2>
					<div className='body'>
						<ContactCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='lorem ipsum dolor'
						/>
						<ContactCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='lorem ipsum dolor'
						/>
						<ContactCard
							ImageLocation='assets/image/no-image.jpeg'
							ImageAlt='card image'
							Name='lorem ipsum dolor'
						/>
					</div>
				</div>
			</section>
			<ScrollToTopButton />
		</>
	)
}

export default Home

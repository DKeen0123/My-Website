import React, { Fragment } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Header } from '../style/typography';

const PortfolioWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: ${rem('32px')};

	@media (max-width: 868px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}
`;

const PortfolioItemWrapper = styled.div`
	position: relative;
	color: ${(props) => props.theme.colors.neutral.xlight};
`;

const PortfolioItemOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.8); /* Black background with opacity */
	z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
`;

const GithubIconOverlay = styled.picture`
	position: absolute;
	left: 40%;
	bottom: 40%;
	z-index: 10;

	&:hover {
		cursor: pointer;
	}
`;

const PortfolioItemImage = styled.img`
	max-width: 100%;
	min-height: 100%;
	display: block;
`;

const PortfolioItemHeader = styled.h3`
	left: 5%;
	top: 0;
	position: absolute;
	font-weight: normal;
	font-size: ${rem('32px')};
	margin: 0;
	z-index: 10;

	&:after {
		content: "";
		border-bottom: 1px solid ${(props) => props.theme.colors.neutral.xlight};
		width: ${rem('24px')};
		display: block;
		z-index: 10;
	}
`;

const PortfolioItemDescription = styled.p`
	bottom: 5%;
	right: 5%;
	position: absolute;
	margin: 0;
	z-index: 10;
`;

const OverlayWrapper = styled.div`
	opacity: 0;
	transition: opacity 0.25s ease-in-out;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;

const PortfolioItem = ({ image, title, description, githubLink, webLink }) => (
	<PortfolioItemWrapper>
		<OverlayWrapper>
			<a href={webLink} target="_blank">
				<PortfolioItemOverlay />
			</a>
			<a href={githubLink} target="_blank">
				<GithubIconOverlay>
					<source srcSet="../../static/Github-Mark-Light.png" media="(min-width: 500px)" />
					<img src="../../static/Github-Mark-Light-64px.png" />
				</GithubIconOverlay>
			</a>
			<PortfolioItemHeader>{title}</PortfolioItemHeader>
			<PortfolioItemDescription>{description}</PortfolioItemDescription>
		</OverlayWrapper>
		<PortfolioItemImage src={image} />
	</PortfolioItemWrapper>
);

const Portfolio = () => (
	<Fragment>
		<Header>My Recent Projects</Header>
		<PortfolioWrapper>
			<PortfolioItem
				image="../../static/sentimind.png"
				title="SentiMind"
				description="A Twitter sentiment analysis tool"
				githubLink="https://github.com/DKeen0123/SentiMind"
				webLink="http://sentimind.co.uk/"
			/>
			<PortfolioItem
				image="../../static/wellmo.png"
				title="WellMo"
				description="A mood check in tool"
				githubLink="https://github.com/DKeen0123/WellMo"
				webLink="https://wellmo.herokuapp.com/"
			/>
			<PortfolioItem
				image="../../static/sick-fits.png"
				title="Sick Fits"
				description="A retail store using Next.js and GraphQL"
				githubLink="https://github.com/DKeen0123/Advanced-React"
				webLink="https://github.com/DKeen0123/Advanced-React"
			/>
			<PortfolioItem
				image="../../static/quote-machine.png"
				title="Random Quote Machine"
				description="A Random quote generator"
				githubLink="https://github.com/DKeen0123/ReactQuoteMachine"
				webLink="https://github.com/DKeen0123/ReactQuoteMachine"
			/>
		</PortfolioWrapper>
	</Fragment>
);

export default Portfolio;

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { rem } from 'polished';
import { H1, TitleText } from '../style/typography';

const HeroWrapper = styled.div`
	margin-top: ${rem('150px')};
	height: 100vh;
`;

const About = () => (
	<HeroWrapper>
		<H1>Hello, my name is Dan.</H1>
		<TitleText>I am a front End Developer based in London, UK.</TitleText>
		<TitleText>
			<Link href="/portfolio">
				<a>Check out my work</a>
			</Link>
		</TitleText>
	</HeroWrapper>
);

export default About;

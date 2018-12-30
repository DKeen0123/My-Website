import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { rem } from 'polished';
import { H1, TitleText } from '../style/typography';

const HeroWrapper = styled.div`
	position: relative;
	margin-top: ${rem('150px')};
	height: 100vh;
`;

const About = () => (
	<HeroWrapper>
		<H1>Hello, my name is Dan.</H1>
		<TitleText>I am a Software Developer based in London, UK.</TitleText>
		<TitleText>
			<Link href="/portfolio">
				<a>Check out my work</a>
			</Link>
			,&nbsp;or find out more about me and what I do below.
		</TitleText>
	</HeroWrapper>
);

export default About;

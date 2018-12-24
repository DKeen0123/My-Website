import styled from 'styled-components';
import { rem } from 'polished';

export const H1 = styled.h1`
	font-size: ${rem('76px')};
	font-weight: 500;
	margin: 0;

	@media (max-width: 700px) {
		font-size: ${rem('56px')};
		margin-bottom: ${rem('32px')};
		line-height: 1.5;
	}
`;

export const H2 = styled.h2`
	font-size: ${rem('42px')};
	margin: 0;
`;

export const TitleText = styled.p`
	font-size: ${rem('40px')};
	margin: 0;

	a {
		text-decoration: underline;
	}

	a:hover {
		color: ${(props) => props.theme.colors.neutral.middark};
	}

	@media (max-width: 700px) {
		font-size: ${rem('32px')};
		margin-bottom: ${rem('24px')};
	}
`;

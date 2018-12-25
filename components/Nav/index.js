import Link from 'next/link';
import styled from 'styled-components';
import { rem } from 'polished';
import NavStyles from './styles';

const EmailLink = styled.a`
	color: ${(props) => props.theme.colors.neutral.base};
	font-size: ${rem('20px')};
`;

const Nav = () => (
	<NavStyles data-test="nav">
		<Link href="/">
			<a>About</a>
		</Link>
		<Link href="/portfolio">
			<a>Portfolio</a>
		</Link>
		<EmailLink href="mailto:keendaniel01@gmail.com">keendaniel01@gmail.com</EmailLink>
	</NavStyles>
);

export default Nav;

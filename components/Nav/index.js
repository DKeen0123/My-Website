import Link from 'next/link';
import NavStyles from './styles';

const Nav = () => (
	<NavStyles data-test="nav">
		<Link href="/about">
			<a>About</a>
		</Link>
		<Link href="/portfolio">
			<a>Portfolio</a>
		</Link>
		<Link href="/contact">
			<a>Contact</a>
		</Link>
	</NavStyles>
);

export default Nav;

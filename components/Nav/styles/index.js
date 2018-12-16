import styled from 'styled-components';

const NavStyles = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: end;
	font-size: 1.5rem;
	a,
	button {
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		position: relative;
		font-weight: 700;
		font-size: 1em;
		background: none;
		border: 0;
		cursor: pointer;
		@media (max-width: 700px) {
			font-size: 10px;
			padding: 0 10px;
		}
		&:hover,
		&:focus {
			outline: none;
			&:after {
				width: calc(100% - 60px);
			}
		}
	}
`;

export default NavStyles;

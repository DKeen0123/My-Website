import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../Header';
import Meta from '../Meta';

const theme = {
	colors: {
		neutral: {
			xlight: '#F9FAFB',
			light: '#F4F6F8',
			midlight: '#DFE3E8',
			base: '#C4CDD5',
			middark: '#637381',
			dark: '#454F5B',
			xdark: '#212B36'
		}
	},
	spacing: {
		xs: '4px',
		sm: '8px',
		md: '16px',
		lg: '24px',
		xl: '32px'
	},
	maxWidth: '1200px'
};

const StyledPage = styled.div`
	background: white;
	color: ${(props) => props.theme.colors.neutral.xdark};
`;

const Inner = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`;

injectGlobal`
  @font-face {
		font-family: 'Karla', sans-serif;
    src: url('/static/Karla-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
		font-size: 10px;
		color: ${(props) => props.theme.colors.neutral.xdark};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
		font-family: 'Karla';
		opacity: 1;
    transition: 1s opacity;
	}
	body.fade-out {
		opacity: 0;
		transition: none;
	}
  a {
    text-decoration: none;
    color: ${theme.colors.neutral.xdark};
  }
  button {  font-family: 'Karla'; }
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;

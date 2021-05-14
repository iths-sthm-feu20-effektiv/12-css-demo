import styled from 'styled-components'
import './Primary.css'

const Transforming = styled.button`
	background-color: var(--primary-button-background);
	color: var(--primary-button-foreground);
	padding: 0.5em 1em;
	margin: 1em;
	border-radius: 100vw;
	border: none;
	font-family: 'Noto Sans JP', sans-serif;

	transition: transform 0.3s linear;

	:hover {
		cursor: pointer;
		/* transform: translate(0px, 4px) scale(2); */
		/* transform: skew(720deg) translate(0px, 4px); */
		/* transform: rotate(-30deg); */
		/* transform: translate(0px, -4px) scale(1.1) */
		/* transform: scale(1.1, 0.9); */
		animation-name: bouncy;
		animation-duration: 0.4s;
		animation-iteration-count: 2;
	}
`

export default Transforming

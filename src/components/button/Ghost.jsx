import styled from 'styled-components'
// const Ghost = ({ children }) => (
// 	<button> {children} </button>
// )

const Ghost = styled.button`
	background-color: var(--primary-button-foreground);
	color: var(--primary-button-background);
	padding: 0.5em 1em;
	margin: 1em;
	border-radius: 100vw;
	border: 2px solid var(--primary-button-background);
	font-family: 'Noto Sans JP', sans-serif;
	transition: all 2s;

	:hover {
		cursor: pointer;
		background-color: var(--primary-button-hover-bg);
	}
`

export default Ghost

import './Primary.css'

const Primary = ({ children }) => (
	<button className="primary"
		style={ { textDecoration: 'underline' } }
	> {children} </button>
)

export default Primary

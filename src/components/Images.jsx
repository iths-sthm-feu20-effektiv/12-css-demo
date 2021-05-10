import src200 from '../src-img/200.jpg'

const imgStyle = {
	width: '50%'
}

const Images = () => (
	<div>
		<p> There are different ways of importing images: <br/> 1) import from /src <br/>2) link in /public folder. </p>

		<p>
			Import from src:
			<img style={imgStyle} src={src200} alt="Status 200" />
		</p>
		<p>
			Link in public folder:
			<img style={imgStyle} src="./public-img/404.jpg" alt="" />
		</p>
		<section>
			Link in CSS file:
			<p style={imgStyle} alt="Status 500" className="img-500"> </p>
		</section>
	</div>
)

export default Images

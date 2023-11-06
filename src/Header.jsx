import trollFace from '../public/troll-face.png'

export default function Header() {
	return (
		<nav>
			<div className="header--logo-container">
				<img
					src={trollFace}
					className="header--img"
					alt="logo troll face"
				/>
				<h1>Meme Generator</h1>
			</div>
			<p className="header--course-info">React Course - Project 3</p>
		</nav>
	)
}

import trollFace from '../troll-face.png'

export default function Header() {
	return (
		<header>
			<div className="header--logo-container">
				<img
					src={trollFace}
					className="header--img"
					alt="logo troll face"
				/>
				<h2>Meme Generator</h2>
			</div>
			<p className="header--course-info">React Course - Project 3</p>
		</header>
	)
}

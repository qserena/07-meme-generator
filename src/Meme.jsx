import { useState, useEffect } from 'react'

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	})

	const [allMemes, setAllMemes] = useState([])

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((response) => response.json())
			.then((result) => setAllMemes(result.data.memes))
	}, [])

	function getMemeImage() {
		const index = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[index].url
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}))
	}

	function handleChange(e) {
		const { name, value } = e.target
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}))
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<div className="meme">
				<img
					src={meme.randomImage}
					alt="Meme image"
					className="meme--image"
				/>
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}

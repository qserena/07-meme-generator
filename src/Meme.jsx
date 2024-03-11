import { useState, useEffect } from 'react'

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	})

	const [allMemes, setAllMemes] = useState([])

	useEffect(() => {
		async function getMemes() {
			const response = await fetch('https://api.imgflip.com/get_memes')
			const result = await response.json()
			setAllMemes(result.data.memes)
		}
		getMemes()
	}, [])

	function getMemeImage(e) {
		e.preventDefault()

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
			<form className="form">
				<div>
					<label className="form--label">Top text</label>
					<input
						type="text"
						placeholder="Shut up"
						name="topText"
						value={meme.topText}
						onChange={handleChange}
						className="form--input"
					/>
				</div>
				<div>
					<label className="form--label">Bottom text</label>
					<input
						type="text"
						placeholder="and take my money"
						name="bottomText"
						value={meme.bottomText}
						onChange={handleChange}
						className="form--input"
					/>
				</div>

				<button onClick={getMemeImage}>Get a new meme image 🖼</button>
			</form>
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

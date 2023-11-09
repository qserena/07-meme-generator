import { useState } from 'react'
import defaultImage from './memeimg.png'
import memes from '../memesData.js'

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: defaultImage,
	})
	const [allMemeImages, setAllMemeImages] = useState(memes)

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes
		const index = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[index].url
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}))
		console.log(url)
	}
	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" />
				<input type="text" placeholder="Bottom text" />
				<button onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<img
				src={meme.randomImage}
				alt="Meme image"
				className="meme--image"
			/>
		</main>
	)
}

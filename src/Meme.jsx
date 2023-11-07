import { useState } from 'react'
import defaultImage from '../public/memeimg.png'
import memes from '../memesData.js'

export default function Meme() {
	const [memeImage, setMemeImage] = useState(defaultImage)

	function getMemeImage() {
		const memesArray = memes.data.memes
		const index = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[index].url
		setMemeImage(url)
		console.log(url)
	}
	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" />
				<input type="text" placeholder="Bottom text" />
				<button onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<img src={memeImage} alt="Meme image" className="meme-image" />
		</main>
	)
}

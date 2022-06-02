import React from "react";
import './Meme.css'
import memesData from '../memesData'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        buttomText: '',
        randomImage: 'http://i.imgflip.com/lbij.jpg'
    })

    const [allMemeImages, setAllMemeImage] = React.useState(memesData)

    // const [memeImage, setMemeImage] = React.useState("./troll-face.png")
    
    function getMemeImage() {
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main className="Meme">
            <div className="Meme-form">
                <div className="Meme-form input">
                    <input 
                        type='text' 
                        placeholder='shut up' 
                        className="input" 
                    />
                    <input 
                        type='text' 
                        placeholder='and take my money' 
                        className="input" 
                    />
                </div>
                <button 
                    type='submit' 
                    className="submit"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <img src={meme.randomImage} className='Meme-img'/>
        </main>
    )
}


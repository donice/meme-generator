import React from "react"
import '../App.css'
import TrollFace from '../static/image/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src= {TrollFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Create your custom meme</h4>
        </header>
    )
}
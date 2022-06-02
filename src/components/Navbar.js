import Logo from '../static/image/troll-face.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className='Logo'>
                <img src={Logo} alt='Logo' />
                <h1>Meme Generator</h1>
            </div>
            <h4>React Course - Project 3</h4>
        </div>
    )
}
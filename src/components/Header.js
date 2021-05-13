import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar_j.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1>A simple hub of<br /> great playlists for <br />every occasion.<br /><br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

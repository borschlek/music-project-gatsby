import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h1>Welcome to Tuneout!</h1>
                        </header>
                        <p>A great new song can make one's day, so this project aims to spread good vibes through a collection of currated playlists. <br />The website allows me to share additional information, comments and most importantly allows you to share your thoughts and suggestions. However, each playlist below is mirrored in either Spotify or Soundcloud to provide an even better listening experience.<br /></p>
                        <p>Enjoy exploring!</p>
                    </section>
                    
                    <section id="three">
                        <h2>Playlists</h2>

                        <ul className="actions">
                            <li><Link to={`blog/posts/wine`} className="button">Wine</Link></li>
                            <li><Link to={`blog/posts/bourbon`} className="button">Bourbon</Link></li>
                            <li><Link to={`blog/posts/pils`} className="button">Pils</Link></li>
                            <li><Link to={`blog/posts/spritz`} className="button">Spritz</Link></li>
                            <li><Link to={`blog/posts/aguadecoco`} className="button">Agua de Coco</Link></li>
                            <li><Link to={`blog/posts/rhabarberschorle`} className="button">Rhabarberschorle</Link></li>
                            <li><Link to={`blog/posts/vodkamate`} className="button">Vodka Mate</Link></li>
                            <li><Link to={`blog/posts/fernetcoca`} className="button">Fernet Coca</Link></li>
                        </ul>
                    </section>

                    <section id="four">
                        <h2>Get In Touch</h2>
                        <p>Let me know which playlist is your favorite, what songs I should add or just say hello. I look forward to connecting!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
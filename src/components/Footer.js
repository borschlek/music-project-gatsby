import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/jonathan-huntenburg-3977b2106/" target="_blank" className="icon fa-linkedin"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/borschlek" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

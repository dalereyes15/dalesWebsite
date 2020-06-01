import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid" style={{background: 'url(https://lh3.googleusercontent.com/pw/ACtC-3faM2z12Q-Es3xTwYeUjDyw9nXJxf3x0SOv9YyOImLoxMXt9mIJeI7_DTICPSxPxGNokh0zKp5BUl1RXswvJK3ct2EtHOOFJ1j1TL8S9AjVY1nsSuY0mjsoy7AbK10Auw5RLLcvUIu6dYewTDL-hbq84w=w1191-h794-no?authuser=0) center / cover'}}>
                    <Cell col={12}>
                        <img
                            src = "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/40773610_10210245282247026_1493580391922008064_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQkRt0cKQtL8ZIwFVwa7Qsxd-ntlVx-EyPB8BZZdg6vFm03o9Fb1sKH4yABoez_mm9qHEPgXm46ZumBFqHRZ7E27&_nc_ht=scontent-ort2-1.xx&oh=410fa327739dfa9ceef7322e99f56049&oe=5EFAC8A2"
                            alt = "avatar"
                            className = "avatar-img"

                        />

                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                        <hr/>

                        <p>Java | C++ | Python | JavaScript | HTML | React | SQL | Android Development</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http:google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="http:google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* YouTube */}
                                <a href="http:google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>



                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;
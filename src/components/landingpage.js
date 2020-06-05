import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid" style={{background: 'url(https://accoladetechnology.com/wp-content/uploads/2019/03/AdobeStock_183503207.jpeg) center / cover'}}>
                    <Cell col={12}>
                        <img
                            src = "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/40773610_10210245282247026_1493580391922008064_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQkRt0cKQtL8ZIwFVwa7Qsxd-ntlVx-EyPB8BZZdg6vFm03o9Fb1sKH4yABoez_mm9qHEPgXm46ZumBFqHRZ7E27&_nc_ht=scontent-ort2-1.xx&oh=410fa327739dfa9ceef7322e99f56049&oe=5EFAC8A2"
                            alt = "avatar"
                            className = "avatar-img"

                        />

                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                        <hr/>

                        <p>Java | C++ | Python | JavaScript | Spring Boot | HTML | React | SQL | Android Development</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/dale-reyes-b4365b15b" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/dalereyes15" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* YouTube */}
                                <a href="https://www.youtube.com/channel/UClcZKeNBIMbBVkTRzoicQcw" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/dalereyes15" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
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
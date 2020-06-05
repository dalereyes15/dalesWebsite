import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell className='resume-left-col' col={4}>
                        <div style={{textalign: 'center'}}>
                            <img
                                src = "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/40773610_10210245282247026_1493580391922008064_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQkRt0cKQtL8ZIwFVwa7Qsxd-ntlVx-EyPB8BZZdg6vFm03o9Fb1sKH4yABoez_mm9qHEPgXm46ZumBFqHRZ7E27&_nc_ht=scontent-ort2-1.xx&oh=410fa327739dfa9ceef7322e99f56049&oe=5EFAC8A2"
                                alt = 'avatar'
                                style={{height: '200px',paddingTop:'3em'}}
                            />


                        </div>
                        <h2 style={{paddingTop: '1em'}}>Dale Reyes</h2>
                        <h4 style={{color:'black' ,textAlign:'center'}}> Position: Software Engineer</h4>
                        <p>My name is Dale Reyes. I recently just graduated from THE Pennsylvania
                            State University with a Bachelor's of Science in Computer Science. In my spare time I enjoy playing basketball with friends,
                            working out, shooting videos, and of course coding any personal project ideas that just happen to pop into my head.
                            Feel free to contact me!
                        </p>
                        <h5>Address</h5>
                        <hr style={{borderTop: '3px solid #833fb2', width: '75%'}} />
                        <p>4092 Crescent Drive, Beverly Hills, CA 90210</p>
                        <h5>Phone</h5>
                        <hr style={{borderTop: '3px solid #833fb2', width: '75%'}} />
                        <p>9082853316</p>
                        <h5>Email</h5>
                        <hr style={{borderTop: '3px solid #833fb2', width: '75%'}} />
                        <p>dalereyes4@gmail.com</p>

                    </Cell>
                    <Cell className='resume-right-col' col={8}>

                        <h2 style = {{textAlign:'center'}}>Resume</h2>

                        <hr style={{borderTop: '3px solid #0476B4 '}} />
                        <h2>Education</h2>


                        <Education
                            startYear = {2011}
                            endYear = {2015}
                            schoolName = "Bridgewater-Raritan High School"
                            schoolDescription = "Bridgewater-Raritan High School"
                        />

                        <Education
                            startYear = {2015}
                            endYear = {2020}
                            schoolName = "Pennsylvania State University"
                            schoolDescription = "Bachelor's of Science in Computer Science"
                        />

                        <hr style={{borderTop: '3px solid #0476B4 '}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear = 'May 2018'
                            endYear = 'August 2018'
                            companyName = 'Principal Financial Group'
                            jobTitle = "Software Engineer"
                            jobDescription = "Created a chat feature"
                        />

                        <Experience
                            startYear = 'May 2019'
                            endYear = 'August 2020'
                            companyName = 'Principal Financial Group'
                            jobTitle = "Software Engineer"
                            jobDescription = "Automated the creation of Sales Reports using Java Batch Professing
                            and Elasticsearch to store user information and data"
                        />

                        <hr style={{borderTop: '3px solid #0476B4 '}} />

                        <h2>Skills</h2>

                        <Skills
                            skill="Java"
                            progress = {100}
                        />
                        <Skills
                            skill="Python"
                            progress = {60}
                        />
                        <Skills
                            skill="C++"
                            progress = {60}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress = {60}
                        />
                        <Skills
                            skill="React"
                            progress = {40}
                        />

                        <Skills
                            skill="SQL"
                            progress = {60}
                        />

                        <hr style={{borderTop: '3px solid #0476B4 '}} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
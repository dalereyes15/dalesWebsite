import React, {Component} from 'react';
import {Grid, Cell, List, ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Dale Reyes</h2>
                        <img
                            src = "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/40773610_10210245282247026_1493580391922008064_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQkRt0cKQtL8ZIwFVwa7Qsxd-ntlVx-EyPB8BZZdg6vFm03o9Fb1sKH4yABoez_mm9qHEPgXm46ZumBFqHRZ7E27&_nc_ht=scontent-ort2-1.xx&oh=410fa327739dfa9ceef7322e99f56049&oe=5EFAC8A2"
                            alt = "avatar"
                            style={{height:'250px'}}
                        />

                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>My name is Dale Reyes. I recently just graduated from THE Pennsylvania
                        State University with a Bachelor's of Science in Computer Science. In my spare time I enjoy playing basketball with friends,
                            working out, shooting videos, and of course coding any personal project ideas that just happen to pop into my head.
                            Feel free to contact me!</p>

                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}} >
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (908)- 285-3316
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}} >
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                        ddr5160@psu.edu
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}} >
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        dalereyes4@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}} >
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        dalereyes4@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
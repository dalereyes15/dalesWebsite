import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>

                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell col={8} className='experience-resume'>
                    <h4 style={{marginTop: '0px', textDecorationLine:'underline'}}> {this.props.companyName}</h4>
                    <h4 style={{marginTop: '0px' ,fontSize:'18px'}}> Position: {this.props.jobTitle}</h4>
                    <ul>{this.props.jobDescription1}</ul>
                    <ul>{this.props.jobDescription2}</ul>
                    <ul>{this.props.jobDescription3}</ul>

                </Cell>




            </Grid>
        )
    }
}

export default Experience;
import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props );
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        /*React*/
        if (this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',
                        background:'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project 1</CardTitle>
                    <CardText>This is my first attempt at using React in order to create a personal website</CardText>

                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>

                </Card>
            );

        }
        /*React*/
        else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Java</h1></div>
            );
        }

        /*Android Studio*/
        else if(this.state.activeTab === 2) {
            return(
                /* Custos */
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',
                        background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4-_rpYnMqFyIioxIjDdtp5YT6fZAvk-X6xnlu_X7g1sz2X65l&usqp=CAU) center / cover'}}>Custos</CardTitle>
                    <CardText>An Android App designed to helpp keep users safe</CardText>

                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>

                </Card>
                    {/* Food Selector */}
                    <Card shadow={5} style={{minWidth: '450' , margin: 'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',
                            background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4-_rpYnMqFyIioxIjDdtp5YT6fZAvk-X6xnlu_X7g1sz2X65l&usqp=CAU) center / cover'}}>Food Eater</CardTitle>
                        <CardText>Can't decide what to eat? Look no further.</CardText>

                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>

                    </Card>

                    {/* Jokes */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',
                            background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4-_rpYnMqFyIioxIjDdtp5YT6fZAvk-X6xnlu_X7g1sz2X65l&usqp=CAU) center / cover'}}>Computer Science Jokes</CardTitle>
                        <CardText>You tryna get a good laugh?</CardText>

                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>

                    </Card>

                </div>




            );
        }

        /*YouTube*/
        else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is YouTube</h1></div>
            );
        }

    }



    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>Android Development</Tab>
                    <Tab>YouTube</Tab>
                </Tabs>


                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>


            </div>
        )
    }
}

export default Projects;
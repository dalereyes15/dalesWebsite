import React, {Component} from 'react';
import {Tab, Tabs} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props );
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if (this.state.activeTab === 0){
            return(
                <div><h1>This is React</h1></div>
            );
        }
        else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Java</h1></div>
            );
        }
        else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is Android Studio</h1></div>
            );
        }
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

                <section clasName = "projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;
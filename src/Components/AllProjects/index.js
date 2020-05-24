import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import './index.css';
import axios from 'axios';
import ProjectList from '../ProjectList/index';
import { fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classnames';

const styles = StyleSheet.create({
    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '1s'
    }
})

const projectStyle = classNames("Projects container", css(styles.fadeInUp))

class AllProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: {},
            error: ''
        };

        this.setData = this.setData.bind(this)

    }

    setData(data) {
        this.setState({
            isLoaded: true,
            data: data
        })
    }

    componentDidMount() {
        axios("https://api.github.com/users/Pradeep-selva/repos")
            .then(response => this.setData(response.data))
            .catch(error => this.setState(
                { error }
            ))
    }

    render() {
        const { isLoaded, data, error } = this.state;

        return (
            <div className="allProjects">
                <Navbar />
                <h1>
                    All Projects
                </h1>
                {
                    error == '' ?
                        (
                            isLoaded ?
                                <div className={projectStyle}>
                                    <div className="row">
                                        <ProjectList data={data} />
                                    </div>
                                </div> :
                                <h1>Loading...</h1>
                        ) :
                        (
                            <h6>{error}</h6>
                        )
                }
            </div>
        );
    }
}

export default AllProjects;
import React, { Component } from 'react'
import './index.css'
import Navbar from '../Navbar/index'
import classNames from 'classnames';
import { bounceInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    bounceInUp: {
        animationName: bounceInUp,
        animationDuration: '1s'
    }
})

const formStyle = classNames("formstyle", css(styles.bounceInUp))

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            full_name: "",
            company_name: "",
            email: "",
            subject: "",
            body: ""
        }

        this.handleChange = this.handleChange.bind(this)
        // this.sendMail = this.sendMail.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="form-page">
                <Navbar />
                <div className="container">
                    <h1>Connect</h1>
                    <div className="row">
                        <form className="col s12" id="form" className={formStyle}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="full_name" name="full_name" type="text" className="validate" onChange={this.handleChange} />
                                    <label for="full_name">Full Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="company_name" name="company_name" type="text" className="validate" onChange={this.handleChange} />
                                    <label for="company_name">Company Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" name="email" type="email" className="validate" onChange={this.handleChange} />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="subject" name="subject" type="text" className="validate" onChange={this.handleChange} />
                                    <label for="subject">Mail subject</label>
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea" name="body" class="materialize-textarea" onChange={this.handleChange}></textarea>
                                    <label for="textarea">Mail content</label>
                                </div>
                            </div>
                        </form>
                        <button form="form" type="submit" value="submit">
                            Send
                        </button>
                    </div>
                </div>

            </div>
        );
    }

}

export default Contact;
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
                                    <input id="full_name" type="text" className="validate" />
                                    <label for="full_name">Full Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="company_name" type="text" className="validate" />
                                    <label for="company_name">Company Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="subject" type="text" className="validate" />
                                    <label for="subject">Mail subject</label>
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea" class="materialize-textarea"></textarea>
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
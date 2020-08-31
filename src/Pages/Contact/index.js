import React, { Component } from "react";
import "./index.css";
import Navbar from "../../Components/Navbar/index";
import classNames from "classnames";
import { bounceInUp } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bounceInUp: {
    animationName: bounceInUp,
    animationDuration: "1s"
  }
});

const formStyle = classNames(
  "col s12 formstyle black-text",
  css(styles.bounceInUp)
);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: "",
      company_name: "",
      email: "",
      subject: "",
      body: "",
      isSent: false,
      error: "",
      btnContent: "Send"
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendMail(e) {
    this.setState({
      btnContent: "Sending..."
    });
    const { subject, body, full_name, company_name, email } = this.state;

    const message = `<p><b><em>Name: </em></b> ${full_name}</p>
                        <p><b><em>Company: </em></b> ${company_name}</p>
                        <p><b><em>Email: </em></b> ${email}</p>
                        <hr>
                        <p>${body}</p>`;

    window.Email.send({
      SecureToken: process.env.REACT_APP_SECURE_TOKEN,
      To: process.env.REACT_APP_MAIL_TO,
      From: process.env.REACT_APP_MAIL_FROM,
      Subject: subject,
      Body: message
    })
      .then((message) =>
        this.setState({
          isSent: true,
          btnContent: "Successful"
        })
      )
      .catch((error) =>
        this.setState({
          error: error
        })
      );

    e.preventDefault();
  }

  render() {
    const { btnContent, isSent, error } = this.state;

    return (
      <div className='form-page'>
        <Navbar />
        <div className='container'>
          <h1>Connect</h1>
          <div className='row'>
            {!isSent && error === "" ? (
              <form id='form' className={formStyle}>
                <div className='row'>
                  <div className='input-field col s6'>
                    <input
                      id='full_name'
                      name='full_name'
                      type='text'
                      className='validate'
                      onChange={this.handleChange}
                    />
                    <label for='full_name'>Full Name</label>
                  </div>
                  <div className='input-field col s6'>
                    <input
                      id='company_name'
                      name='company_name'
                      type='text'
                      className='validate'
                      onChange={this.handleChange}
                    />
                    <label for='company_name'>Company </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      className='validate'
                      onChange={this.handleChange}
                    />
                    <label for='email'>Email</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id='subject'
                      name='subject'
                      type='text'
                      className='validate'
                      onChange={this.handleChange}
                    />
                    <label for='subject'>Mail subject</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <textarea
                      id='textarea'
                      name='body'
                      class='materialize-textarea'
                      onChange={this.handleChange}
                    ></textarea>
                    <label for='textarea'>Mail content</label>
                  </div>
                </div>
                <button
                  form='form'
                  type='submit'
                  value='submit'
                  onClick={this.sendMail}
                >
                  {btnContent}
                </button>
              </form>
            ) : error === "" ? (
              <div className={css(styles.bounceInUp)}>
                <h4>Mail Sent Successfully</h4>
              </div>
            ) : (
              <h4>{error}</h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

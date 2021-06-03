import React from "react";
import axios from "axios";
import classNames from "classnames";
import { fadeInLeftBig, fadeInUp } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { Navbar, Loading } from "../../Components";
import "./index.css";

const styles = StyleSheet.create({
  fadeInLeftBig: {
    animationName: fadeInLeftBig,
    animationDuration: "1s"
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1s"
  }
});

const bioStyle = classNames("card", css(styles.fadeInLeftBig));
const blogStyle = classNames("card horizontal", css(styles.fadeInUp));

class Blog extends React.Component {
  state = {
    data: null
  };

  htmlToText = (html) => {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent;
  };

  componentDidMount() {
    axios(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pradeepselvaraju"
    )
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <>
          <Navbar />
          <div className='blogs container'>
            <div className='row'>
              <div className='center-align'>
                <div className='col xl3 l4 s10 offset-s1'>
                  <div className={bioStyle}>
                    <div className='card-image'>
                      <img
                        src={data.feed.image}
                        className='blog-avatar'
                        alt='medium profile'
                      />
                      <span className='card-title'>Pradeep Selva</span>
                    </div>
                    <div className='card-content'>
                      I post my blogs on medium. Please give them a read and
                      share your thoughts {":)"}
                    </div>
                    <div className='card-action'>
                      <a
                        href={data.feed.link}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        View Medium Feed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col l8 s12'>
                <h1 className='header'>{data.feed.title}</h1>
                <div className='row'>
                  {data.items.map(
                    ({ description, guid, title, pubDate, link }) => {
                      const textDescription = this.htmlToText(description);
                      const findWord = "Unsplash";
                      const descriptionToDisplay = textDescription
                        ?.slice(
                          textDescription?.indexOf(findWord) + findWord.length,
                          textDescription?.length
                        )
                        .slice(0, 300);

                      return (
                        <div className='col s12' key={guid}>
                          <div className={blogStyle}>
                            <div className='card-stacked'>
                              <div className='card-content'>
                                <h4 className='blog-title'>{title}</h4>
                                <h6>Published on {pubDate.slice(0, 10)}</h6>
                                <p>
                                  {descriptionToDisplay}
                                  ...
                                </p>
                              </div>
                              <div className='card-action'>
                                <a
                                  href={link}
                                  target='_blank'
                                  rel='noreferrer noopener'
                                >
                                  View Full Article
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <Loading />
        </>
      );
    }
  }
}

export default Blog;

import React from "react";
import axios from "axios";
import { Navbar, Loading } from "../../Components";
import "./index.css";

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
          {/* <h6>{this.htmlToText(data.items[0].description).slice(0, 200)}...</h6> */}
          <div className='blogs container'>
            <div className='row'>
              <div className='center-align'>
                <div className='col xl3 l4 s10 offset-s1'>
                  <div className='card'>
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
                  {data.items.map((blog) => (
                    <div className='col s12' key={blog.guid}>
                      <div class='card horizontal'>
                        <div className='card-stacked'>
                          <div className='card-content'>
                            <h4 className='blog-title'>{blog.title}</h4>
                            <h6>Published on {blog.pubDate.slice(0, 10)}</h6>
                            <p>
                              {this.htmlToText(data.items[0].description).slice(
                                0,
                                200
                              )}
                              ...
                            </p>
                          </div>
                          <div className='card-action'>
                            <a
                              href={blog.link}
                              target='_blank'
                              rel='noreferrer noopener'
                            >
                              View Full Article
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

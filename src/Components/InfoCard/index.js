import React from 'react'
import './index.css'


const InfoCard = ({ cf, gh, isLoaded, clickCf, clickGh, curTitle }) =>
    <div className="infocard" data-aos="fade-up">
        <div className="row">
            <div className="col s12 l6 offset-l3">
                <div class="card">
                    <div class="card-content purple lighten-3">
                        <h4>{curTitle}</h4>
                    </div>
                    <div class="card-tabs">
                        <ul class="tabs ">
                            <li class="tab"><a href="#github" onClick={clickGh}>GitHub</a></li>
                            <li class="tab"><a href="#codeforces" onClick={clickCf}>Codeforces</a></li>
                        </ul>
                    </div>
                    <div class="card-content purple lighten-4">
                        <div id="codeforces">Test 1</div>
                        <div id="github">
                            <ul style={{
                                textAlign: 'left',
                                paddingLeft: '20%'
                            }}>
                                <li><span className="title">Name: </span>{gh.name}</li>
                                <li><span className="title">Location: </span>{gh.location}</li>
                                <li><span className="title">Public Repos: </span>{gh.public_repos}</li>
                                <li><span className="title">Followers: </span>{gh.followers}</li>
                                <li><span className="title">Following: </span>{gh.following}</li>
                            </ul>
                            <a href={gh.html_url} className="purple-text text-darken-2">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default InfoCard;
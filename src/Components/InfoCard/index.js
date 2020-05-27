import React from 'react'
import './index.css'
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import codeforcesIcon from '@iconify/icons-simple-icons/codeforces';



const InfoCard = ({ cf, gh, clickCf, clickGh, curTitle }) => {

    return (<div className="infocard">
        <div className="row">
            <div className="col s12 l6 offset-l3">
                <div class="card z-depth-4">
                    <div class="card-content purple lighten-4">
                        {curTitle == "GitHub" ? <Icon icon={githubIcon} className="iconify" /> : <Icon icon={codeforcesIcon} className="iconify" />}
                        <h4>{curTitle}</h4>
                    </div>
                    <div class="card-tabs">
                        <ul class="tabs ">
                            <li class="tab"><a href="#codeforces" onClick={clickCf}>Codeforces</a></li>
                            <li class="tab"><a href="#github" onClick={clickGh}>GitHub</a></li>
                        </ul>
                    </div>
                    <div class="card-content purple lighten-5">
                        <div id="codeforces">
                            <ul style={{
                                textAlign: 'left',
                                paddingLeft: '20%'
                            }}>
                                <li><span className="title">Handle: </span>{cf.handle}</li>
                                <li><span className="title">Contributions: </span>{cf.contribution}</li>
                                <li><span className="title">Rating: </span>{cf.rating}</li>
                                <li><span className="title">Rank: </span>{cf.rank}</li>
                                <li><span className="title">Max Rating: </span>{cf.maxRating}</li>
                            </ul>
                            <div className="link">
                                <a href="https://codeforces.com/profile/PradeepSelva" className="purple-text text-darken-2">View Profile</a>
                            </div>
                        </div>
                        <div id="github">
                            <ul style={{
                                textAlign: 'left',
                                paddingLeft: '20%'
                            }}>
                                <li><span className="title">Handle: </span>{gh.login}</li>
                                <li><span className="title">Location: </span>{gh.location}</li>
                                <li><span className="title">Public Repos: </span>{gh.public_repos}</li>
                                <li><span className="title">Followers: </span>{gh.followers}</li>
                                <li><span className="title">Following: </span>{gh.following}</li>
                            </ul>
                            <div className="link">
                                <a href={gh.html_url} className="purple-text text-darken-2 link">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}


export default InfoCard;
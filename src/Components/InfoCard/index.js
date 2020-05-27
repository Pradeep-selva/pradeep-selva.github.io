import React from 'react'
import './index.css'


const InfoCard = () =>
    <div className="infocard" data-aos="fade-up">
        <div className="row">
            <div className="col s12 l6 offset-l3">
                <div class="card">
                    <div class="card-content purple lighten-3">
                        <span className="icon iconify" data-icon="simple-icons:codeforces" data-inline="false"></span>
                        <h4>Codeforces</h4>
                    </div>
                    <div class="card-tabs">
                        <ul class="tabs ">
                            <li class="tab"><a href="#codeforces">Codeforces</a></li>
                            <li class="tab"><a href="#github">Github</a></li>
                        </ul>
                    </div>
                    <div class="card-content purple lighten-4">
                        <div id="github">Test 1</div>
                        <div id="codeforces">Test 2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default InfoCard;
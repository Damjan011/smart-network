import React from 'react';

function Subscribers() {
    return (
    <div className="ui-top-content">
    <div className="ui-top-header">
        <p className="ui-name-label">John Miller</p>
        <p className="ui-main-label">Miller-40242</p>
        <div className="ui-header-icons">
            <img className="header-icons-active" src="img/pin.png" />
            <img src="img/slider.png" />
            <img src="img/dots.png" />
        </div>
    </div>
    <div className="ui-top-boxes">
        <div className="ui-box ui-icon-box">
            <div className="ui-box-image-wrapper">
                <img className="ui-img-fix" src="img/user.png" />
            </div>
            <div>
                <p>Subscriber</p>
                <p>John Miller</p>
                <img className="ui-arrow" src="damjan" />
            </div>
        </div>
        <div className="ui-box ui-icon-box">
            <div className="ui-box-image-wrapper">
                <img src="img/Group.png" />
            </div>
            <div>
                <p>Traffic</p>
                <p>4 services active</p>
                <img className="ui-arrow" src="damjan" />
            </div>
        </div>
        <div className="ui-box ui-icon-box">
            <div className="ui-box-image-wrapper">
                <img src="img/Group 72.png" />
            </div>
            <div>
                <p>Speedtest</p>
                <p>Last speedtest: Monday 01/02 @ 12:35 PM</p>
                <img className="ui-arrow" src="damjan" />
            </div>
        </div>
    </div>

    <div className="ui-center-content">
        <div id="utilization" className="ui-box ui-progress-box">
            <div className="ui-utilization">
                <div className="ui-utilization-labels">
                    <p>JUNE UTILIZATION</p>
                    <p>LIMIT: 35 GB</p>
                </div>
                <div className="ui-meter ui-progress-bar-big">
                    <span><p>14.1 GB</p>  </span>
                    <div></div>
                </div>
            </div>
            <div className="ui-speed">
                <div className="ui-speed-inner">
                    <div className="ui-flex">
                        <img src="img/arrow-dl.png" />
                        <p className=" ui-speed-label-green ">21.4 Mb/s</p>
                    </div>
                    <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small ">
                        <span className="ui-progress-number ">
                            <p>1</p>
                            <p>5</p>
                            <p>20</p>
                            </span>
                        <span className="ui-progress-background "></span>
                    </div>
                </div>
                <div className="ui-speed-inner ">
                    <div className="ui-flex ">
                        <img src="img/arrow-up.png" />
                        <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                    </div>
                    <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                        <span className="ui-progress-number ">
                            <p>1</p>
                            <p>5</p>
                            <p>20</p>
                            </span>
                        <span className="ui-progress-background "></span>
                    </div>
                </div>
            </div>
        </div>
        <div id="info-bars " className="ui-box ui-info-box ">
            <div className="ui-bar-container ">
                <p className="ui-bar-container-label ">OVERALL INTERNET HEALTH</p>
                <div className="ui-smiley-bar ">
                    <img className="ui-smiley-image " src="img/smiley.png " />
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                </div>
            </div>
            <div className="ui-bar-container ">
                <p className="ui-bar-container-label ">SHORT TERM PACKET LOSS</p>
                <div className="ui-data-info ">
                    <p>2%</p>
                    <p>0%</p>
                </div>
                <div className="ui-data-bar ">
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                </div>
            </div>
            <div className="ui-bar-container ">
                <p className="ui-bar-container-label ">LONG TERM PACKET LOSS</p>
                <div className="ui-data-info ">
                    <p>2%</p>
                    <p>0%</p>
                </div>
                <div className="ui-data-bar ">
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                    <div className="ui-bar-green ">
                    </div>
                </div>
            </div>
            <div className="ui-bar-container ">
                <p className="ui-bar-container-label ">LATENCY</p>
                <div className="ui-data-info ">
                    <p>80 ms</p>
                    <p>20 ms</p>
                </div>
                <div className="ui-data-bar ">
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange ">
                    </div>
                    <div className="ui-bar-orange-empty ">
                    </div>
                    <div className="ui-bar-orange-empty ">
                    </div>
                    <div className="ui-bar-orange-empty ">
                    </div>
                </div>
            </div>
            <div className="ui-bar-container ">
                <div className="ui-dot-container ">
                    <div className="ui-dot ui-dot-red ">
                    </div>
                    <p>MTU</p>
                </div>
                <div className="ui-dot-container ">
                    <div className="ui-dot ui-dot-red ">
                    </div>
                    <p>DNS 1</p>
                </div>
                <div className="ui-dot-container ">
                    <div className="ui-dot ui-dot-green ">
                    </div>
                    <p>DNS 2</p>
                </div>
            </div>
        </div>

        <div id="bandwidth-usage " className="ui-box ">
            <h1>Bandwidth usage<br/> Graph</h1>
        </div>

        <div id="data-transfer " className="ui-box ">
            <h1>Data transfer<br/> Graph</h1>
        </div>

        <div id="health " className="ui-box ">
            <h1>Health<br/> Graph</h1>
        </div>

        <div className="ui-column-break ">
        </div>

        <div id="map " className="ui-box ">
            <iframe title="subscribers-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22658.491135757515!2d20.46694545!3d44.77445665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1594291412484!5m2!1sen!2srs " width="100% " height="300
                            " frameborder="0 " allowfullscreen=" " aria-hidden="false " tabindex="0 "></iframe>
        </div>

        <div id="right-menu " className="vertical-menu-right ui-box ">
            <a className="ui-green-item " href="# ">
                <p>Status</p>
                <p>Active</p>
            </a>
            <a className="ui-blue-item " href="# ">
                <p>Acnowledge</p>
                <p>Indefinitely</p>
            </a>
            <a href="# ">
                <p>Public IP</p>
                <p>99.433.212.12</p>
            </a>
            <a href="# ">
                <p>Serial & IP</p>
                <p>64FE345GD<br/>172.231.121.1 </p>
            </a>
            <a href="# ">
                <p>Last Self Reg</p>
                <p>39 minutes ago</p>
            </a>
            <a href="# ">
                <p>RouterOS</p>
                <p>6.55.3</p>
            </a>
            <a href="# ">
                <p>RouterCRM</p>
                <p>Miller-40222</p>
            </a>
            <a href="# ">
                <p>ISP Plan</p>
                <p>Cloudhouse Fiberwave</p>
            </a>
        </div>

        <div id="support-info " className="vertical-menu-right ui-box ">
            <a className="ui-blue-item " href="# ">
                <p>Support Info</p>
                <p>Hide</p>
            </a>
            <p className="ui-support-info-text ">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
            <a href="# ">
                <p className="ui-blue-text ">Share...</p>
            </a>
        </div>

    </div>
</div>);
  }

export default Subscribers;
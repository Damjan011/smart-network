import React from 'react';

function Users() {
  return (
    <div className="ui-layout">
      <div className="ui-sidebar">
        <div className="ui-logo-box">
          <div className="ui-logo-wrapper">
            <img className="ui-logo-small" alt="Small logo" src="../img/Group.png" />
          </div>
          <div className="ui-logo-label">
            <p>Smart Network</p>
          </div>
        </div>
      </div>

      <div className="ui-top-content">
        <div className="ui-top-content-search">
          <div className="ui-top-header-search">
            <p className="ui-name-label">John Miller</p>
            <p className="ui-main-label">Miller-40242</p>
            <div className="ui-header-icons">
              <img className="header-icons-active" src="img/pin.png" />
              <img src="img/slider.png" />
              <img src="img/dots.png" />
            </div>
          </div>
          <div className="ui-search-big">
            <img src="damjan" />
            <p>Search network...</p>
          </div>
        </div>
        <div className="table-div">
          <table>
            <tr className="ui-network-labels">
              <th>
                <div>
                  <p>Name</p>
                </div>
              </th>
              <th>
                <div>
                  <p>Last 90 min.</p>
                </div>
              </th>
              <th>
                <div>
                  <p>Traffic (absolute)</p>
                </div>
              </th>
              <th>
                <div>
                  <p>Health</p>
                </div>
              </th>
              <th>
                <div>
                  <p>Device</p>
                </div>
              </th>
            </tr>
            <tr>
              <td>
                <div className="ui-table-label">
                  <p>Networks</p>
                </div>
              </td>
            </tr>
            <tr className="ui-content-row">
              <td>
                <div className="ui-network-status-container">
                  <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
                    <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
                  </div>
                  <div className="ui-network-image-container">
                    <img className="ui-network-image" src="../img/Group 72.png" />
                  </div>
                  <div>
                    <div className="ui-network-label-container">
                      <p>Armstrong</p>
                    </div>
                    <div className="ui-network-status">
                      <div className="ui-active-field">
                        <p>ACTIVE</p>
                      </div>
                      <div className="ui-vip-clients-field">
                        <p>VIP CLIENTS</p>
                      </div>
                      <div className="ui-more-field">
                        <p>
                          5 MORE...
                                         </p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="ui-flex-center">
                  <h2>GRAPH</h2>
                </div>
              </td>
              <td>
                <div className="ui-traffic-speed">
                  <div className="ui-speed-inner">
                    <div className="ui-flex-center">
                      <div>
                        <img src="../img/arrow-dl.png" />
                      </div>
                      <div>
                        <p className=" ui-speed-label-green">21.4 Mb/s</p>
                      </div>
                    </div>
                    <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                      <div className="ui-progress-number">
                        <div>
                          <p>1</p>
                        </div>
                        <div>
                          <p>5</p>
                        </div>
                        <div>
                          <p>20</p>
                        </div>
                      </div>
                      <span className="ui-progress-background"></span>
                    </div>
                  </div>
                  <div className="ui-speed-inner ">
                    <div className="ui-flex-center">
                      <div>
                        <img src="../img/arrow-up.png" />
                      </div>
                      <div>
                        <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                      </div>
                    </div>
                    <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                      <div className="ui-progress-number">
                        <div>
                          <p>1</p>
                        </div>
                        <div>
                          <p>5</p>
                        </div>
                        <div>
                          <p>20</p>
                        </div>
                      </div>
                      <div className="ui-progress-background"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="ui-smiley-bar">
                  <div>
                    <img className="ui-smiley-image" src="../img/smiley.png" alt="Smiley image" />
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                  <div className="ui-bar-green">
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <p>Device</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
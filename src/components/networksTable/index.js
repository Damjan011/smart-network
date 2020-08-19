import React from 'react';
import './style.css';
import DownloadArrow from '../../assets/images/arrow-dl.png';
import UploadArrow from '../../assets/images/arrow-up.png';
import SmileyHappy from '../../assets/images/smiley-happy.png';
import BlueCheckIcon from '../../assets/images/check-blue.png';
import RouterIconGray from '../../assets/images/router-icon.png';
import TrafficDropdown from '../trafficDropdown';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort, sortConfig };
};

const NetworksTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.networksTableData);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div className="table-div">
      <table className="ui-multi-row ui-heading-sort-align">
        <tr className="ui-network-labels">
          <th>
            <div
              onClick={() => requestSort('networkName')}
              className={getClassNamesFor('networkName')}
            >
              <p>
                Name
                </p>

            </div>
          </th>
          <th>
            <div


              onClick={() => requestSort('graphValue')}
              className={getClassNamesFor('graphValue')}
            >
              <p>
                Last 90 min.
                </p>

            </div>
          </th>
          <th>
            <div
              onClick={() => requestSort('speed')}
              className={getClassNamesFor('speed')}
            >
              <p>
                Traffic (absolute)
                </p>
                <TrafficDropdown/>



                

            </div>
          </th>
          <th>
            <div>
              <p>Health</p>
            </div>
          </th>
          <th>
            <div onClick={() => requestSort('device')} className={getClassNamesFor('device')}>
              <p>Device IP</p>
            </div>
          </th>
          <th>
            <div>
              <p>Status</p>
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

        {items.map((item) => (
          <tr className="ui-content-row" key={item.id}>
            <td>
              <div className="ui-network-status-container">
                <div className="ui-network-checkbox ui-icon-checked">
                  <img src={BlueCheckIcon} alt="Check icon" className="ui-check-icon" />
                </div>
                <div className="ui-network-image-container">
                  <img className="ui-network-image" src={RouterIconGray} alt="Network logo" />
                </div>
                <div>
                  <div className="ui-network-label-container">
                    <p>{item.networkName}</p>
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
                <h2>{item.graphValue}</h2>
              </div>
            </td>
            <td>
              <div className="ui-traffic-speed">
                <div className="ui-speed-inner">
                  <div className="ui-flex-center">
                    <div>
                      <img className="ui-speed-arrow" src={DownloadArrow} alt="Download arrow" />
                    </div>
                    <div>
                      <p className=" ui-speed-label-green">21.4 Mb/s</p>
                    </div>
                  </div>
                  <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                    <div className="ui-progress-number-container">
                      <div>
                        <p>{item.speed}</p>
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
                      <img className="ui-speed-arrow" src={UploadArrow} alt="Upload arrow" />
                    </div>
                    <div>
                      <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                    </div>
                  </div>
                  <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                    <div className="ui-progress-number-container">
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
                  <img className="ui-smiley-image" src={SmileyHappy} alt="Smiling face" />
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
              <div className="ui-basic-row-item ui-device-ip-text">
        <p>{item.device}</p>
              </div>
            </td>
            <td>
              <div className="ui-basic-row-item ui-status-text">
        <p>53432332k332k</p>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
};

export default function SortableTable() {
  return (
    <NetworksTable
      networksTableData={[
        { id: 1, networkName: 'Armstrong', graphValue: 'DAKI', speed: 20, device: 10234111 },
        { id: 2, networkName: 'Bailey network', graphValue: 'BAKI', speed: 30, device: 20234111 },
        { id: 3, networkName: 'Barclay', graphValue: 'STEVA', speed: 10, device: 30234111 },
        { id: 4, networkName: 'London', graphValue: 'PLAKI', speed: 90, device: 44234111 },
        { id: 5, networkName: 'Brigham', graphValue: 'JOVAN', speed: 50, device: 50234111 },
        { id: 6, networkName: 'Bennet lane', graphValue: 'IVANA', speed: 40, device: 60234111 },
        { id: 7, networkName: 'Valley Internet', graphValue: 'UF', speed: 60, device: 70234111 },
        { id: 8, networkName: 'Armstrong', graphValue: 'DAKI', speed: 20, device: 10234111 },
        { id: 9, networkName: 'Bailey network', graphValue: 'BAKI', speed: 30, device: 20234111 },
        { id: 10, networkName: 'Barclay', graphValue: 'STEVA', speed: 10, device: 30234111 },
        { id: 11, networkName: 'London', graphValue: 'PLAKI', speed: 90, device: 44234111 },
        { id: 12, networkName: 'Brigham', graphValue: 'JOVAN', speed: 50, device: 50234111 },
        { id: 13, networkName: 'Bennet lane', graphValue: 'IVANA', speed: 40, device: 60234111 },
        { id: 14, networkName: 'Valley Internet', graphValue: 'UF', speed: 60, device: 70234111 },

      ]}
    />
  )
};
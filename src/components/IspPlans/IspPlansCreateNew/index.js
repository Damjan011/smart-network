import React from 'react';
import './style.css';
import ModalDropdownRow from '../../modalDropdownRow';

const IspPlansCreateNew = () => (
  <div className="modal-main">
    <div className="ui-modal-header">
      <div className="ui-modal-cancel-label">
        <p>Cancel</p>
      </div>
      <div className="ui-modal-main-label">
        <p>Create ISP Plan</p>
      </div>
      <div className="ui-modal-save-label">
        <p>Save</p>
      </div>
    </div>
    <div className="ui-modal-body">
      <div className="ui-modal-row">
        <div className="ui-modal-row-label">
          <p>ISP Plan Name</p>
        </div>
        <div className="ui-modal-row-value">
          <p>$144 Valleywave</p>
        </div>
      </div>

      <div className="ui-modal-row-multi">
        <div className="ui-modal-row">
          <div className="ui-modal-row-label">
            <p>ISP Data Cap</p>
          </div>
          <div className="ui-modal-row-value">
            <p>23 GB</p>
          </div>
        </div>
        <div className="ui-modal-row">
          <div className="ui-modal-row-label">
            <p>Upstream</p>
          </div>
          <div className="ui-modal-row-value">
            <p>14 MB</p>
          </div>
        </div>
        <div className="ui-modal-row">
          <div className="ui-modal-row-label">
            <p>Downstream</p>
          </div>
          <div className="ui-modal-row-value">
            <p>14 MB</p>
          </div>
        </div>
      </div>



      <div className="ui-modal-row-multi">
        <div className="ui-modal-row">
          <div className="ui-modal-row-label">
            <p>ISP Ref</p>
          </div>
          <div className="ui-modal-row-value">
            <p>Text...</p>
          </div>
        </div>
        <div className="ui-modal-row">
          <div className="ui-modal-row-label">
            <p>Description</p>
          </div>
          <div className="ui-modal-row-value">
            <p>Text...</p>
          </div>
        </div>
      </div>


      <div className="ui-modal-row-with-heading">
        <div className="ui-modal-row-heading">
          <p>SHAPING</p>
        </div>
        <ModalDropdownRow />
      </div>

      <ModalDropdownRow />
    </div>
  </div>
)

export default IspPlansCreateNew;
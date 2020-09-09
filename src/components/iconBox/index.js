import classes from './style.module.css';
import React from 'react';
import UserIcon from '../../assets/images/user.png';
import DropdownArrow from '../../assets/images/dropdown-arrow.png';

const IconBox = () => (

  <div className={classes["ui-icon-box"]}>
    <div className={classes["ui-box-image-label-wrapper"]}>
      <div className={classes["ui-box-image-wrapper"]}>
        <img className={classes["ui-box-icon"]} src={UserIcon} alt="User icon" />
      </div>
      <div className={classes["ui-icon-box-label"]}>
        <p>Subscriber</p>
      </div>
    </div>
    <div className={classes["ui-icon-box-text"]}>
      <p>John Miller</p>
    </div>
    <div>
      <img className={classes["ui-dropdown-arrow"]} src={DropdownArrow} alt="Dropdown arrow" />
    </div>
  </div>
)

export default IconBox;
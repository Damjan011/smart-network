import './style.css';
import React from 'react';
import SliderIcon from '../../assets/images/slider.png';
import DotsIcon from '../../assets/images/dots.png';
import PinIconWhite from '../../assets/images/pin.png';

const HeaderIcons = ({ }) => (

  <div className="ui-header-icons">
    <div>
      <img src={PinIconWhite} alt="Pin icon" className="ui-header-icons-active" />
    </div>
    <div>
      <img src={SliderIcon} alt="Slider icon" />
    </div>
    <div>
      <img src={DotsIcon} alt="Dots icon" />
    </div>
  </div>
)

export default HeaderIcons;
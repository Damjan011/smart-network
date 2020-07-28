import './style.css';
import React from 'react';
import HeaderIcons from '../../components/headerIcons';
import SearchBar from '../../components/searchBar';
import HeaderLabels from '../headerLabels';

const TopContentSearch = ({ }) => (
  <div className="ui-top-content-search">
    <div className="ui-top-header-search">
      <HeaderLabels />
      <HeaderIcons />
    </div>
    <SearchBar />
  </div>
)

export default TopContentSearch;
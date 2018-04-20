import React from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';
import CustomMenu from './CustomMenu'

export default class FeatureSelect extends React.Component {
  render() {
    return (
      <Dropdown id="dropdown-custom-menu">
        <Dropdown.Toggle>
          Select Type
        </Dropdown.Toggle>
        
        <CustomMenu bsRole="menu">
          <MenuItem eventKey="1">Engine</MenuItem>
          <MenuItem eventKey="2">Entertainment</MenuItem>
          <MenuItem eventKey="3">Tires</MenuItem>
          <MenuItem eventKey="1">Lights</MenuItem>
        </CustomMenu>
      </Dropdown>
    )
  }
}
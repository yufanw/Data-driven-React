import React from 'react';
import { FormGroup, 
         ControlLabel, 
         FormControl
       } from 'react-bootstrap';

class Featureform extends React.Component {
  render() {
    return (
      <div className="feature-form">
        <h2>Create A Feature</h2>
        <form className="form-wrapper">
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select" placeholder="Select Type">
              <option value="select">Engine</option>
              <option value="other">... Add New Feature Type</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Enter Name" />
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Enter Code" />
          </FormGroup>

          <button className="btn-feature" type="submit">
            <i className="icon-arrow-right"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Featureform;
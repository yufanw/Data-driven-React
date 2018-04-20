import React from 'react';
import { 
  FormGroup, 
  ControlLabel, 
  FormControl
} from 'react-bootstrap';
import FeatureSelect from './FeatureSelect';

class FeatureForm extends React.Component {
  render() {
    return (
      <div className="feature-form">
        <h2>Create A Feature</h2>
        <form className="form-wrapper">
          <FeatureSelect />
          <button className="btn-type" type="submit">
            <i className="icon-plus"></i>
          </button>
          <FormGroup className="form-name">
            <FormControl type="text" placeholder="Enter Name" />
          </FormGroup>
          <FormGroup className="form-code">
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

export default FeatureForm;
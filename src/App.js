import React, {Component} from 'react';
// import logo from './night.svg';
import './App.css';
import Email from './Email'

class App extends Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
      formControls: {
        my_email: {
          value: '',
          placeholder: 'What is your email',
          valid: false,
          
          validationRules: {
            isRequired: true,
            isEmail: true
          },
          touched: false
        }
      }
    }
  }


  render() {

    return (
      <div className="App">
        <Email name="my_email"
        placeholder = {
          this.state.formControls.my_email.placeholder
        }
        value = {
          this.state.formControls.my_email.value
        }
        onChange = {
          this.changeHandler
        }
        touched = {
          this.state.formControls.my_email.touched
        }
        valid = {
          this.state.formControls.my_email.valid
        }
        />
      </div>
    );
  }
}

export default App;

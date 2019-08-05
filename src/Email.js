// import React, {Component} from 'react';

// class Email extends Component {
//     constructor() {
//         super();
//         this.state = {
//             email: ''
//         }
//     }

//     changeHandler = event => {
//         this.setState({
//             email: event.target.value
//         });
//     }

//     render() {
//         return ( 
//             <form>
//                 <input type = "email"
//                 name = "email"
//                 value = {
//                     this.state.email
//                 }
//                 onChange = {
//                     this.changeHandler
//                 }
//                 /> 
//             </form>
//         );
//     }
// }

// export default Email;

import React from 'react';

const Email = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return ( 
        
        <div className = "form-group" >
            <input type = "email"
            className = {
                formControl
            } {
                ...props
            }
            /> 
        </div>
    );
}

export default Email;
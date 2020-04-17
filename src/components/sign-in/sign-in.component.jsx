import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInwithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password:'' });

        } catch(error) {
            console.log(error);
            
        }
   
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name] : value })
    }

    render (){
        return (
            <div className="sign-in">
            <h1>I already have an account</h1>
            <span>sign in with email or login with your password</span>

            <form onSubmit={this.handleSubmit}>
            
            <FormInput name="email" type="email" value={this.state.email} 
            handleChange={this.handleChange}
            label="email"
             required/>
            
            <FormInput name="password" type="password" value={this.state.password} 
            handleChange={this.handleChange} 
            label="password"
            required/>

            <div className="buttons">
            <CustomButton type="submit"> SIGN IN </CustomButton>
                <CustomButton onClick={signInwithGoogle} isGoogleSignIn> {' '}
                SIGN IN WITH GOOGLE{' '} 
                </CustomButton>
            </div>
            </form>
                <h1>{this.state.email}</h1>
            </div>
        );
    }

}

export default SignIn;

// this is first sign in / up form i created before importing Form=input

/*
<div className="sign-in">
            <h1>I already have an account</h1>
            <span>sign in with email or login with your password</span>

            <form onSubmit={this.handleSubmit}>
            
            <label>Email: </label>
            <input name="email" type="email" value={this.state.email} 
            onChange={this.handleChange}
            
             required/>

             <label>password: </label>
            <input name="password" type="password" value={this.state.password} 
            onChange={this.handleChange} 
            required/>

                <input type="submit" value='Form Submit' />
            </form>
                <h1>{this.state.email}</h1>
            </div>
            */
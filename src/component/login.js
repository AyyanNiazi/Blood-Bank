import React,{Component} from 'react'
import {connect}  from 'react-redux'
import {signinAction} from '../store/action/authActions'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass: '',
        }
    }

submitHandler(e){
    const {email,pass} = this.state
    e.preventDefault();
    let signinDetail = {
        email: email,
        pass: pass,
    }
  this.props.signinAction(signinDetail)
  console.log("props: " , this.props)
  this.props.history.push('/')
  console.log('sign in logg : ' , signinDetail)
}
    render(){
        return(
            <div>
                <h1>Login</h1>
                <form  onSubmit={(e) => {this.submitHandler(e)}} >
                    <input type='text' value={this.state.email}
                    onChange={(e)=> this.setState({email: e.target.value})} /><br/>
                    <input type='password' value={this.state.pass}
                    onChange={(e)=> this.setState({pass: e.target.value})} /><br/>
                    <input type='submit' />
                </form>
            </div>
        )   
    }
}
//redux

// const mapStateToProps = (state) =>{
// return { auth: state.authLogout , fb : state.fbval, loginval: state.authSignin}
// }

const mapDispatchToProps = (dispatch) => {
    return {
        signinAction: (userSigninDetail) => { 
            dispatch(signinAction(userSigninDetail))
        }
    }
}

export default  connect(null,mapDispatchToProps)(Login)
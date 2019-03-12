import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Signup} from '../store/action/authActions'

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: '',
            email: '',
            pass: '',
        }
        this.submitHandler= this.submitHandler.bind(this)
    }

submitHandler(e){
    let {name, email,pass} =this.state
    e.preventDefault();
    // console.log(this.state)
    // var target = e.target.value
    // let name = target
    // let email = target
    // let pass = target
    let signupDetail = {
        name: name,
        email: email,
        pass: pass,
    }
    this.props.Signup(signupDetail);
    console.log("my state" ,signupDetail)
    this.props.history.push('/home')
}
    render(){
        return(
            <div>
                 <h1>Signup</h1>
                <form  onSubmit={(e)=>this.submitHandler(e)} >
                    <input type='text' value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}  /><br/>
                    <input type='email'  value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})} /><br/>
                    <input type='password' value={this.state.pass}
                    onChange={(e) => this.setState({pass: e.target.value})}   /><br/>
                    <input type='submit' /><br/>
                    <Link to='/' > Already Have an Account  </Link>
                </form>
            </div>
        )
    }
}
//redux

const mapStateToProps = (state) =>{
    return { auth : state.auth,  fb: state.fbVal} // Value From Reducers
}

const mapDispatchToprops = (dispatch) => {  
    return {
        Signup : (signupDetail) => { dispatch (Signup(signupDetail))}
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(SignUp)
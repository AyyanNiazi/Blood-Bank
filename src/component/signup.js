import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import * as matui from 'material-ui'
import * as firebase from 'firebase'
import { Signup } from '../store/action/authActions'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            error: {
                message: ''
            },
        }
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(e) {
        let { name, email, pass } = this.state
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
        console.log("my state", signupDetail)
            this.props.history.push('/')        

        // firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,pass)
        // .then((e)=>{ 
        // })
        // .catch((e)=>{
        //     this.setState({ error : e})
        // })
       
    }
    render() {
        const isInvalid = this.state.username === '' || this.state.email === '' || this.state.pass === '';
        return (
            <div>
                <matui.Card className='crime-card'>
                    <h4 style={{ color: 'green', textAlign: 'center' }} >Signup</h4>
                    <form onSubmit={(e) => this.submitHandler(e)} >
                        <matui.CardText>
                            <matui.TextField
                                type='text' value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                                floatingLabelText="User Name"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                ref="username"
                                id="username"
                                required
                            />

                            <matui.TextField
                                type='email' value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                floatingLabelText="Email"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                required
                            />
                            <matui.TextField
                                type='password' value={this.state.pass}
                                onChange={(e) => this.setState({ pass: e.target.value })}
                                floatingLabelText="Password"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                type='password'
                                required
                            />
                        {/* <p style={{color: 'red'}} > {this.state.error.message} </p> */}
                        </matui.CardText>
                        <matui.CardActions>
                            <matui.RaisedButton label="Submit"
                                type="submit" primary={true} className="button"
                                disabled={isInvalid}
                                styles={styles}>
                            </matui.RaisedButton>
                            <matui.Snackbar
                                open={this.state.open}
                                message="Thanks For Joining Us"
                                style={{ color: 'red' }}
                                autoHideDuration={4000}
                                onRequestClose={this.handleRequestClose}
                            />
                        </matui.CardActions>
                        {/* <button  type='submit' > Sign up </button> */}

                    </form>
                    <div> <Link to='/' >
                        <matui.FlatButton
                            label="Login"
                            className="long-loginBtn"
                            icon={<PersonAdd />}
                        />
                    </Link>  </div>
                </matui.Card>


                {/* end */}
                   
            </div>
        )
    }
}


const styles = {

    floatingLabelStyle: {
        color: 'green',
    },
    floatingLabelFocusStyle: {
        color: 'green',
    },

};
//redux

const mapStateToProps = (state) => {
    return { auth: state.auth, fb: state.fbVal } // Value From Reducers
}

const mapDispatchToprops = (dispatch) => {
    return {
        Signup: (signupDetail) => { dispatch(Signup(signupDetail)) }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(SignUp)
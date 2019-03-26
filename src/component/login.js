import React,{Component} from 'react'
import {connect}  from 'react-redux'
import * as matui from 'material-ui'
import { grey500 } from 'material-ui/styles/colors';
import {Link} from 'react-router-dom'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import './login.css'
import * as firebase from'firebase'
import {signinAction} from '../store/action/authActions'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass: '',
            open: false,
            error: {
                message: '',
              } 
        }
    }

    handleClick = () => {
        this.setState({
          open: true,
        });
      };
    
submitHandler(e){
    const {email,pass} = this.state
    e.preventDefault();
    let signinDetail = {
        email: email,
        pass: pass,
    }
  this.props.signinAction(signinDetail)
  console.log("props: " , this.props)
  console.log('sign in logg : ' , signinDetail)
  firebase.auth().signInWithEmailAndPassword(email,pass)
  .then((e)=>{
      console.log("succes")
      this.setState({
        open: true
      })
  this.props.history.push('/')
  })
  .catch((e)=>{
      this.setState({ error: e,  });
  })
}
    render(){
        const isInvalid =   this.state.email === '' || this.state.password === '' ;

        return(
            <div>
                <matui.Card  className='crime-card'>
                <h4 style={{color: 'green', textAlign: 'center'}} >Login</h4>
                
                <form  onSubmit={(e) => {this.submitHandler(e)}} >
       <matui.CardText>
       <matui.TextField
        type='text' value={this.state.email}
        onChange={(e)=> this.setState({email: e.target.value})} 
        floatingLabelText="Email"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        required
       />

        <matui.TextField
        type='password' 
        floatingLabelText="Password"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        value={this.state.pass}
        onChange={eve => this.setState({pass: eve.target.value} )}    
        required
         />
        <p  style={{color: 'red'}}> {this.state.error.message}</p>
              </matui.CardText>
                <matui.CardActions>
                  <div>
                    <matui.Checkbox
                      label="Remember"
                      className="classRemember"
                      labelStyle={{color: grey500}}
                      iconStyle={{color: grey500, borderColor: grey500,
                      fill: grey500}}
                      />
                  <matui.RaisedButton 
                  label="Submit"
                  onClick={this.handleClick.bind(this)}
                  type="submit" primary={true}
                   className="raisedbutton"
                  disabled={isInvalid}
                  styles={styles}> 
                   </matui.RaisedButton>  
                   </div>
                   <matui.Snackbar
                   open={this.state.open === true}
                   message="Thanks For Joining Us"
                   style={{color: 'red'}}
                   autoHideDuration={4000}
                   onRequestClose={this.handleRequestClose}
                  />
              </matui.CardActions> 
              <br/><br/>
                  </form> 
                  <div> <Link to='/signup' >
                  <matui.FlatButton
                     label="Register"                
                      className="registerbt"
                    icon={<PersonAdd />}
                    />
                   </Link>  </div>

                
                
                {/* end */}
                   
                </matui.Card>
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
import React from 'react'
import {Route,Redirect,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import Home from './home'
import { userInfo } from 'os';
import logo from './images/logo.png'
import Routes from '../component/routes';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : '',
            logout: false
        }
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    user:user   
                })
            }
            else{
                console.log("user not fined")
            }
        })
    }

logout(e){
    firebase.auth().signOut().then(()=>{
        this.setState({
            logout: true
        })
        // this.props.history.push('/')
    })
}
componentWillReceiveProps(nextProps){
    console.log("Will recieave props : ", nextProps)
}
    render(){
        const {logout} = this.state
        if(logout === true){
            return (
                <BrowserRouter> 
                <Route path='/' component={Home}  />
                </BrowserRouter>
            )
        }
        return(
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#"><img src={logo} height='65' width='80' /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
     <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right"
    style={{color: 'white', marginLeft: '52vw'}} >
    <li class="nav-item">
        <button type="button" class="btn btn-secondary"
         data-container="body"
          data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on top
        </button>
        {/* <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Logout</button> */}
        {/* <li><a href="#"><span style={{color: 'white'}} class="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
      </li>
    </ul>
  </div>
</nav>

        {/* Navbar ended */}

               {/* <Link to='/bloodDonor' >Blood Donor</Link><br/> */}
                {/* <Link to='/requireDonor' >Required Blood</Link><br/> */}
                {this.state.user ? <div>  
                {this.props.authReducer.authLogout === !false ? 
                    <div>
                         {this.props.authReducer.userinfo.username} <br/>
                         {this.props.authReducer.userinfo.useremail} <br/>
                    </div>
                
                 :
                        <div>
                        {this.props.authReducer.authLogout === true}
                        </div> 
                    } 
                </div> 
                 : 
                 <button onClick={this.logout.bind(this)} >Logout</button>
                 
                 }

        <button onClick={this.logout.bind(this)} >Logout</button>

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    // const {userinfo} = state.authReducer

    console.log(state.auth, "  Auth State")

    return {
        authReducer: state.auth
    }
}
export default connect(mapStateToProps,null)(Navbar)
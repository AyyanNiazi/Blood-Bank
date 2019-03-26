import React from 'react'
import {Link,Redirect,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import logo from './images/logo.png'

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : '    ',
            logout: false,
            navbar: true,
        }
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    user:user,
                    // navbar:true,   
                })
            }
            else{
                console.log("user not fined")
            }
        })
    }

logout(){
    firebase.auth().signOut().then(()=>{
        this.setState({
            logout: true,
            navbar: false,
        })
        // this.props.history.push('/login')
    })
}
// componentWillReceiveProps(nextProps){
//     console.log("Will recieave props : ", nextProps)
// }
    render(){
        // const {logout} = this.state
        // if(logout === true){
        //     return (
        //        <Redirect to='/login' />
        //     )
        // }
        return(
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#"><img src={logo} height='65' width='80' /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
    {this.props.authReducer.authLogout === false || this.state.logout === true ? <div>
<ul class="nav navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li> </ul>  </div>
      :   <ul class="nav navbar-nav">
      <li class="nav-item active">
      <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
    </li>
      <li class="nav-item" style={{float: 'left'}} >
        <Link class="nav-link" to="/bloodDonor"  >Blood Donor</Link>
      </li>
      <li class="nav-item" style={{float: 'right'}} >
        <Link class="nav-link" to="/requireDonor">Require Donor </Link>
      </li>  </ul>  }
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    <ul class="nav navbar-nav navbar-right"
    style={{color: 'white', }} >
    <li class="nav-item">
        {this.state.user ? <div class='nav-link' >  
                {this.props.authReducer.authLogout === !false && this.state.logout === false ? 
                    <div style={{marginLeft: '80vh'}} >
                         <li class="nav-item"> <h4> <i class="fa fa-user"  style={{marginRight: '2vh', fontSize: '4vh'}} ></i>
                          {this.props.authReducer.userinfo.username} <Link to='/login' onClick={this.logout.bind(this)} > 
                           <i style={{marginLeft: '4vh',color: '#dc3545'  }} class="fa fa-power-off"></i> </Link>
                          </h4>  </li> 
                         {/* {this.props.authReducer.userinfo.useremail} <br/> */}
                    </div>
                
                 :
                        <div style={{marginLeft: '105vh'}}  >
                        {this.props.authReducer.authLogout === true || this.state.logout === true }
                        <li class="nav-item">  <i class="fa fa-user"  style={{marginRight: '2vh', fontSize: '4vh'}} ></i>
                        
                        <Link classs='nav-link' style={{color: 'rgba(255,255,255,0.5)', fontSize: '3vh'}} to='/login' > Login </Link>
                        </li>
                        </div> 
                    } 
                </div> 
                 : void 0
                //  <button class='btn btn-secondary' onClick={this.logout.bind(this)} >Logout</button>
                 
                 }
        {/* <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Logout</button> */}
        {/* <li><a href="#"><span style={{color: 'white'}} class="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
      </li>
    </ul>
  </div>
</nav>

        {/* Navbar ended */}

               {/* <Link to='/bloodDonor' >Blood Donor</Link><br/> */}
                {/* <Link to='/requireDonor' >Required Blood</Link><br/> */}
               

        {/* <button onClick={this.logout.bind(this)} >Logout</button> */}

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
import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import * as firebase from 'firebase'
import Login from './login'
import Signup from './signup'
import Home from '../container/home'
import Navbar from '../container/navbar'
import BloodDonor from '../container/Donors/bloodDonor'
import RequireDonor from '../container/Donors/requireDonor'


// function PrivateRoute ({component: Component, authed, ...rest}) {
//     return (
//       <Route
//         {...rest}
//         render={(props) => authed === true
//           ? <Component {...props} />
//           : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
//       />
//     )
//   }
  
//   function PublicRoute ({component: Component, authed, ...rest}) {
//     return (
//       <Route
//         {...rest}
//         render={(props) => authed === false
//           ? <Component {...props} />
//           : 
//         <Redirect to='/bloodDonor' /> }
//       />
//     )
//   }

class Routes extends React.Component{
    constructor(props) {
        super(props);
    
    this.state = {
        authed: false,
        lodaing: true,
    }
}

componentDidMount () {
    this.setState({
        lodaing: false
    })
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        })
      } else {
        this.setState({
          authed: false,
        })
      }
    })
}

componentWillUnmount(){
    this.removeListener()
}
    render(){
        return this.state.lodaing === true ? <div class="progress" style={{margin: '50'}} >
        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100"
         aria-valuemin="0" aria-valuemax="100"></div>
      </div>
        : (
            <div>
                <Navbar/>
               <BrowserRouter>            
                <Switch>
                    <Route   path='/login' component={Login} />
                    <Route    path='/signup' component={Signup} />
                    <Route exact path='/' component={Home} />
                    <Route    path='/requireDonor' component={RequireDonor} />
                    <Route    path='/bloodDonor' component={BloodDonor} />
                </Switch>
               </BrowserRouter>
            </div>
        )
    }
}
export default Routes
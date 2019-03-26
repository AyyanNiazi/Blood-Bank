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

// componentDidMount () {
//     this.setState({
//         lodaing: false
//     })
//     this.removeListener = firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({
//           authed: true,
//         })
//       } else {
//         this.setState({
//           authed: false,
//         })
//       }
//     })
// }

// componentWillUnmount(){
//     this.removeListener()
// }
    render(){
        return ( 
      
        
               <BrowserRouter>            
            <div>
               <Navbar/>
                <Switch>
                    <Route exact  path='/login' component={Login} />
                    <Route  exact  path='/signup' component={Signup} />
                    <Route exact path='/' component={Home} />
                    <Route  exact  path='/requireDonor' component={RequireDonor} />
                    <Route  exact  path='/bloodDonor' component={BloodDonor} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}
export default Routes
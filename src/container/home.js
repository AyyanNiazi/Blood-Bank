import * as React from "react"
import {Link} from 'react-router-dom'
import ch1 from './images/ch1.jpeg'
import ch2 from './images/ch2.jpeg'
import ch3 from './images/ch3.jpeg'

class Home extends React.Component{
    render(){
        return(
            <div>
 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"
  style={{backgroundAttachment: 'fixed', opacity: '0.9' }} >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
  <div class="carousel-caption d-none d-md-block" style={{marginTop: '200vh'}} >
    <h1 style={{color: '#dc3545', fontSize: '2.5em',fontWeight: '700' }} > “Your blood can give a life to someone.” </h1><br/>
    <p  style={{fontSize: '1.9em'}} >
    “Don’t let fools or mosquitoes suck your blood, put it to good use. Donate blood and save a life.”</p><br/><br/>
    <Link to='./bloodDonor' type="button" class="btn btn-danger btn-lg">Donate Blood </Link>
    <Link to='./requireDonor' type="button" class="btn btn-outline-danger btn-lg" style={{marginLeft: '20vw'}} >
    Require Blood</Link>

  </div>

    <div class="carousel-item active">
      <img height='100%' class="d-block w-100 h-10" src={ch1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ch2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ch3} alt="Third slide"/>
    </div>
    {/* caption */}
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            </div>
        )
    }
}

export default  Home
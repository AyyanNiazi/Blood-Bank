import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requireBloodAction} from '../../store/action/donorAction'
class RequireDonor extends Component{
    constructor(props){
        super(props);
        this.state = {
            bloodType: undefined,
            error: '',
            keyVal: 1,
        }
        // this.selectHandler = this.selectHandler.bind(this)
    }
// componentDidMount(){
// //   It will run one time just after did mount
//   console.log(this.props, " require donor Props compoent did mount ")
    
// }

// componentWillReceiveProps(nextProps){
//     // const {props} = this.state

//     console.log(nextProps, "propsssss ")
   
// }

getDonorInfo(bloodType){

//    let {bloodType} = this.state

   let bloodSelector ;
   this.setState({
    bloodType: bloodType,
    error: '',
    })
    this.props.requireBloodDetail(bloodType)
   console.log(bloodSelector);
   console.log(this.props.donorData)
   if(this.props.donorData[bloodSelector] ){
    var data = this.props.donorInfo[bloodSelector];
    var objectToArray = [];
    for (let key in data){
        objectToArray.push(data[key]);
    }
  
    console.log('if running')
   }
   else{
       this.setState({
           bloodType: [],
           error: 'You dont have any data'
       })
       console.log('else running');

   }
}
    render(){
        // const {donorInfo} = this.props
        return (
            <div>
                {/* Bootstrap */}

        <div class="card text-white bg-dark mb-3" style={{maxWidth: "100%", color: '#dc3545'}} >
          <div class="card-header" style={{marginLeft: "10%", color: '#dc3545',fontWeight: '800',fontSize: '2.6em'}} >Select Your Desired Blood Group which requird </div>
            <div class="card-body"   >
                <h5 class="card-title "  style={{marginLeft: "45%", color: '#dc3545',fontWeight: '800',fontSize: '1.49em'}} > 
                <select class='btn btn-info dropdown-toggle'
                    value={this.state.bloodType}
                    onChange={(e)=> this.getDonorInfo(e.target.value)} >
                        <option value={0} > Blood Type   </option>
                        <option class='dropdown-item' value={'A+'}> A+  </option>
                        <option value={'B+' }> B+ </option>
                        <option value={'AB+'}> AB+ </option>
                        <option value={'A-'}> A- </option>
                        <option value={'B-'}> B- </option>
                        <option value={'AB-'}> AB- </option>
                        <option value={'O+'}> O+ </option>
                        <option value={'O-'}> O- </option>
                    </select></h5>
                <p class="card-text"  >

     <div class="jumbotron">
     {this.state.bloodType !== undefined ? 
     <div> 
          <hr class="my-2"/>
          <ul class='list-group' style={{marginLeft: "5", color: '#dc3545',fontWeight: '800',fontSize: '1.49em'}} > 
              {this.props.donorData.map((v,i)=>{
                      return(
                          <div class='lead' key={i} >
                          <li class="list-group-item list-group-item-action active" style={{fontWeight: '700'}} >   BLOOD TYPE :  {v.bloodType}   </li>
                          <li class='list-group-item'key={i}> Donor Id : <b> {i+1} </b> </li>
                          <li class='list-group-item' > Donor Name : <b>  {v.name} </b> </li>
                          <li class='list-group-item' > City :<b>  {v.city} </b> </li>
                          <li class='list-group-item' > Age : <b> {v.age} </b> </li>
                          <li class='list-group-item' > Area : <b>  {v.area}  </b> </li>
                          <li class='list-group-item' > Country <b>   {v.country} </b></li>
                          <li class='list-group-item' > Number: <b>  {v.number}  </b> </li>
                          <br/><br/>
                      </div>
                      )
              })}
          </ul> 
           </div> 
            :   <div class="alert alert-danger" role="alert">
                <i class="fa fa-exclamation-triangle" style={{marginRight: '7px'}} ></i>Please Select Any Blood Type From Above                
                </div>}

        
        
        {/* <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p> */}
</div>


                {/* <li>{this.props.donorInfo}</li> */}
                {/* {this.props.donorData === undefined ? <h1> No Blood yet </h1> : */}
                {/* {this.state.bloodType === [] ? <h1> no data </h1>
                :  this.state.bloodType.map((val,i)=>{
                    return(
                        <div key={i} >
                            <li> {val.name}  </li>
                        
                        </div>
                    )   
                })} */}
              
         </p>
                {/* end bootstrap */}
                </div>
            </div>                
                   
                    {/* <h1> {this.props.donorData.name}  </h1> */}
            {/* {this.props.donorReducer.map((v,key)=>{
                 return (
            <div key={key} ><h1> {v.age} </h1>  </div>
            })} */}
            </div> 
        )
    }
}
//redux

const mapstatetoProps = (state) => {
    console.log(state.donor.donorInfo, "redcers state")
    // if(state.donor){
    // console.log(state.donor," Require Donor State succesfuly retrieved ") 
    // }

    // else{
    // console.log("Sorry Require Donor upcoming State not exist") 

    // }

        return{
            donorData : state.donor.donorInfo
        } 
}

const mapDispatchtoprops= (dispatch) => {
    return {
        requireBloodDetail: (requireBloodDetail) => {
            dispatch(requireBloodAction(requireBloodDetail))
        }
    }
}

export default connect(mapstatetoProps,mapDispatchtoprops)(RequireDonor)
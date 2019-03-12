import React, {Component} from 'react'
import {connect} from 'react-redux'
import {donorDetailAction} from '../../store/action/donorAction'

class BloodDonor extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            country: '',
            city: '',
            area: '',
            age: '',
            number: '',
            bloodType: '',
            keyValue: 0,
            key:0,
        }
        // this.bloodGroupHandler= this.bloodGroupHandler.bind(this)
    }
// bloodGroupHandler(e,key){
//     const {keyValue,key} = this.state
//     e.preventDefault();
//     this.setState({
//         keyValue: key + 1,
//         bloodType: e.target.childNodes[0].nodeValue,
//         // bloodType: e.target.value,
//     })
// }
submitHandler(e){
    e.preventDefault();
    const { name, country,age,city,area,number,bloodType,keyValue } = this.state;

const donorDetail = {
    name: name, 
    country:country,
    area:area,
    age:age,
    city:city,
    number:number,
    bloodType:bloodType,
    keyValue:keyValue
}
this.props.donorDetailAction(donorDetail);

this.setState({
    name: '',
    country:'',
    area:'',
    age:'',
    city:'',
    number:'',
    bloodType:'',
    keyValue:'',
})
}
    render(){
        return (
            <div>
                <h1>  Blood Donor  </h1>
                <form onSubmit={(e) => {this.submitHandler(e)}} >
                    <input value={this.state.name} placeholder='name'
                    onChange={(e) => this.setState({ name: e.target.value })} /><br/>
                     <input value={this.state.country}placeholder='country'
                    onChange={(e) => this.setState({ country: e.target.value })} /><br/>
                     <input value={this.state.city}placeholder='city'
                    onChange={(e) => this.setState({ city: e.target.value })} /> <br/>
                    <input value={this.state.area}placeholder='area'
                    onChange={(e) => this.setState({ area: e.target.value })} /> <br/>
                    <input value={this.state.number}placeholder='number'
                    onChange={(e) => this.setState({ number: e.target.value })} /><br/>
                    <input value={this.state.age}placeholder='age'
                    onChange={(e) => this.setState({ age: e.target.value })} /><br/>
                    <select value={this.state.bloodType} 
                    onChange={(e)=>{this.setState({bloodType: e.target.value})}} >
                        <option value={0}  > Blood Type   </option>
                        <option value={'A+'} > A+  </option>
                        <option value={'B+' } > B+ </option>
                        <option value={'AB+'} > AB+ </option>
                        <option value={'A-'} > A- </option>
                        <option value={'B-'} > B- </option>
                        <option value={'AB-'} > AB- </option>
                        <option value={'O+'} > O+ </option>
                        <option value={'O-'} > O- </option>
                    </select><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
// redux

const mapStateToProps = (state)=>{
    return {
        authReducers: state.authReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        donorDetailAction : donorDetail  => {
            dispatch(donorDetailAction(donorDetail))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BloodDonor)
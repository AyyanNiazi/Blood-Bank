import React, { Component } from 'react'
import { connect } from 'react-redux'
import { donorDetailAction } from '../../store/action/donorAction'

class BloodDonor extends Component {
    constructor(props) {
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
            key: 0,
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
    submitHandler(e) {
        e.preventDefault();
        const { name, country, age, city, area, number, bloodType, keyValue } = this.state;

        const donorDetail = {
            name: name,
            country: country,
            area: area,
            age: age,
            city: city,
            number: number,
            bloodType: bloodType,
            keyValue: keyValue
        }
        this.props.donorDetailAction(donorDetail);

        this.setState({
            name: '',
            country: '',
            area: '',
            age: '',
            city: '',
            number: '',
            bloodType: '',
            keyValue: '',
        })
        alert("Your Information submitted siccesfully")
    }
    render() {
        return (
            <div class='container' >
                <h1 class='text-danger' style={{textAlign: 'center'}} >  Blood Donor  </h1>
                <form onSubmit={(e) => { this.submitHandler(e) }} >
                    <div class="form-group">
                        <label class="control-label" for="disabledInput">Donor Name:</label>
                        <input value={this.state.name} placeholder='name' class="form-control" id="disabledInput"
                         onChange={(e) => this.setState({ name: e.target.value })} required />
                    </div>

                    <div class="form-group">
                        <fieldset>
                            <label class="control-label" for="readOnlyInput">Existing Country:</label>
                            <input value={this.state.country} placeholder='country' class="form-control" id="readOnlyInput" type="text"
                            required    onChange={(e) => this.setState({ country: e.target.value })} />
                        </fieldset>
                    </div>

                    <div class="form-group">
                        <label class="form-control-label" for="inputSuccess1">Existing City:</label>
                        <input value={this.state.city} placeholder='city' class="form-control" id="inputValid"
                         required   onChange={(e) => this.setState({ city: e.target.value })} />
                    </div>

                    <div class="form-group">
                        <label class="form-control-label" for="inputDanger1">Existing Area:</label>
                        <input value={this.state.area} placeholder='area' class="form-control" id="inputInvalid"
                         required   onChange={(e) => this.setState({ area: e.target.value })} />
                    </div>

                    <div class="form-group">
                        <label class="col-form-label col-form-label-lg" for="inputLarge">Phone No: </label>
                        <input value={this.state.number} placeholder='03001234567' class="form-control" id="inputLarge"
                        type='number' required   onChange={(e) => this.setState({ number: e.target.value })} />
                    </div>

                    <div class="form-group">
                        <label class="col-form-label" for="inputDefault">Age:</label>
                        <input value={this.state.age} placeholder='age' class="form-control" id="inputDefault"
                         type='number' required   onChange={(e) => this.setState({ age: e.target.value })} />
                    </div>

                    <div class="form-group">
                        <label for="exampleSelect1">Blood Type</label>
                        <select value={this.state.bloodType} class="form-control" id="exampleSelect1"
                        required    onChange={(e) => { this.setState({ bloodType: e.target.value }) }} >
                            <option value=""  > Blood Type   </option>
                            <option value={'A+'} > A+  </option>
                            <option value={'B+'} > B+ </option>
                            <option value={'AB+'} > AB+ </option>
                            <option value={'A-'} > A- </option>
                            <option value={'B-'} > B- </option>
                            <option value={'AB-'} > AB- </option>
                            <option value={'O+'} > O+ </option>
                            <option value={'O-'} > O- </option>
                        </select>
                    </div> <br />

                    <button type="submit" class="btn btn-danger btn-lg btn-block">Submit</button>
                    {/* <input value={this.state.name} placeholder='name'
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
                    </select><br/> */}
                    {/* <input type='submit' /> */}
                </form>
            </div>
        )
    }
}
// redux

const mapStateToProps = (state) => {
    return {
        authReducers: state.authReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        donorDetailAction: donorDetail => {
            dispatch(donorDetailAction(donorDetail))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloodDonor)
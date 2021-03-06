import React, { Component } from 'react';
import axios from 'axios';
var DatePicker = require("reactstrap-date-picker");


export default class Createcv extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangeTertiary = this.onChangeTertiary.bind(this);
        // this.onChangeOtherTertiary = this.onChangeOtherTertiary.bind(this);
        // this.onChangeHighcshool = this.onChangeHighcshool.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            dateOfBirth: '',
            region: '',
            nationality: '',
            phone: '',
            email: '',
            // tertiary: '',
            // otherTertiary: '',
            // highschool

        }
    }

    onChangeFirstname(e){
        this.setState({
            firstName: e.target.value
        })
    }
    onChangeLastname(e){
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeGender(e){
        this.setState({
            gender: e.target.value
        })
    }
    onChangeDateofBirth(date){
        this.setState({
            dateOfBirth: date
        })
    }
    onChangeRegion(e){
        this.setState({
            region: e.target.value
        })
    }
    onChangeNationality(e){
        this.setState({
            nationality: e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone: e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    
    
onSubmit(e) {
    e.preventDefault();

    const cv = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        dateOfBirth: this.state.dateOfBirth,
        region: this.state.region,
        nationality: this.state.nationality,
        phone: this.state.phone,
        email: this.state.email
    }
    console.log(cv)
    axios.post('http://localhost:5000/personal/add', cv)
      .then(res => console.log(res.data));
}

    render() {
        return (
            <div className="container">
               <h3>Enter your details here</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Firstname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstname}
              />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastname}
              />
        </div>
        <div className="form-group">
          <label>Date of birth: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
        <label>Gender</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
              />
        </div>
        <div className="form-group">
        <label>Region</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.region}
              onChange={this.onChangeRegion}
              />
        </div>
        <div className="form-group">
        <label>Nationality</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.nationality}
              onChange={this.onChangeNationality}
              />
        </div>
        <div className="form-group">
        <label>Phone</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group">
        <label>Email</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

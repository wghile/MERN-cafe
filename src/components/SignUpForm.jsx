import React, { Component } from 'react'
import { signUp } from '../utilities/users-service'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    // handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     alert(JSON.stringify(this.state))
    // }

    handleSubmit = async(evt) => {
      //Prevent form from being submitted to the server
      evt.preventDefault()
      try{
        //we don't want to send the 'error' or 'confirm' property so remove
        const formData = {...this.state}  //make copy of state
        delete formData.error
        delete formData.confirm

        const user = await signUp(formData)
        // console.log(user)
        this.props.setUser(user)
      }catch{
        this.setState({ error: 'Sign Up Failed- Try Again'})
      }
    }

  render() {

    const disable = this.state.password !== this.state.confirm

    return (
      <div>
        <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
    )
  }
}

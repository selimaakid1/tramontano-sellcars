import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../Actions/AuthActions'
import { setAlert, removeAlert} from '../Actions/AlertActions'
import { v4 as uuid } from "uuid";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }


        if (nextProps.auth.error) {
            if (nextProps.auth.error === 'Registrati prima!' || nextProps.auth.error === 'Password errata!') {
                let id = uuid()
                this.props.setAlert(nextProps.auth.error, 'warning', id)
                setTimeout(() => {
                    this.props.removeAlert()
                    this.props.clearError()
                }, 5000)
            }

        }
    }
    loginNow = () => {
        if (this.state.Email === '' || this.state.PassWord === '') {
            let id = uuid()
            this.props.setAlert('Please enter Your credentials before ! ', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)

            }, 5000)
        } else {
            this.props.login({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }
    }
    render() {
        return (
            <div className='login-form'>
                <h1 className='h2'>Area Riservata</h1>
                <p className='form-note'>* indicates a required field</p>
                <br />
                <div className='form-group' >
                    <input type='email' name='Email' className='input-full form-control inputlog' onChange={this.handleChange} autoCorrect='off' autoCapitalize='off' autoFocus aria-describedby='form-error' required />
                    <label for='email'>Email*</label>
                </div>
                <div className='form-group'>
                    <input type='password' name='Password' className='input-full form-control inputlog' onChange={this.handleChange} aria-describedby='form-error' required />
                    <label for='password'>Password*</label>
                </div>
                <div className='btn-form'>
                    <button type='submit' onClick={this.loginNow} className='sign-btn'>
                        Entra
                </button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { login, setAlert, removeAlert })(Login)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../Actions/AuthActions'

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            name: '',
            brand: '',
            class: '',
            description: '',
            price:'',
            service:''

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div className='form'>
                <form>
                    <div>
                        <h1 className='add-title'>Aggiungi Auto</h1>
                    </div>
                    <div>
                        <label for='foto'>Foto</label>
                        <input type='file' accept='.jpg' name='img' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for='name'>Nome</label>
                        <input type='text' name='name' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label fro='brand'>Brand</label>
                        <input type='text' name='brand' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for='classe'>Classe</label>
                        <select name="class" id="class" onChange={this.handleChange}>
                            <option value="sedan">Sedan</option>
                            <option value="coupe">Coupe</option>
                            <option value="convertible">Convertilble</option>
                            <option value="suv">Suv</option>
                            <option value="wagon">Wagon</option>
                            <option value="trucks">Trucks</option>

                        </select>
                    </div>
                    <div>
                        <label for='descrizione'>Descrizione</label>
                        <textarea name='description' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for='prezzo'>Prezzo</label>
                        <input type='text' name='price' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <p>Servizio</p>
                        <input type="radio" id="vendita" name="service" value="vendita" onChange={this.handleChange} />
                        <label for="vendita">Vendita</label>
                            <input type="radio" id="nolleggio" name="service" value="nolleggio"  onChange={this.handleChange}/>
                            <label for="nolleggio">Nolleggio</label>
                    </div>
                    <button type='submit'  className='sign-btn'>
                        Aggiungi
                </button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        cars: state.car
    }
}
export default connect(mapStateToProps, {loadUser})(AddCar)

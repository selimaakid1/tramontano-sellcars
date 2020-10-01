import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../Actions/AuthActions'
import { addCar, EditCar, clearCar } from '../Actions/CarActions'
import { Radio } from 'antd';
import { Select } from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            name: '',
            brand: '',
            classe: '',
            description: '',
            price: '',
            service: '',
            value: 1

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { Option } = Select;
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        const { Title } = Typography;
        return (
            <div className='form'>
                <form>
                    <div className='form-case'>
                        <Title level={2} className='add-title'>Aggiungi Auto</Title>
                    </div>
                    
                    <div className='form-case'>
                        <label for='foto'>Foto</label>
                        <br></br>
                        <Upload {...props} name='img' onChange={this.handleChange}>
                        <Button icon={<UploadOutlined />}>Carica</Button>
                    </Upload>
                    </div>
                    <div className='form-case'>
                        <label for='name'>Nome</label>
                        <input type='text' name='name' onChange={this.handleChange} />
                    </div>
                    <div className='form-case'>
                        <label fro='brand'>Brand</label>
                        <input type='text' name='brand' onChange={this.handleChange} />
                    </div>
                    <div className='form-case'>
                        <label for='classe'>Classe</label>
                        <br></br>
                        <Select defaultValue="Sedan" style={{ width: 120 }} name="classe" onChange={this.handleChange}>
                            <Option value="sedan">Sedan</Option>
                            <Option value="coupe">Coupe</Option>
                            <Option value="convertible">Convertible</Option>
                            <Option value="trucks">Trucks</Option>
                            <Option value="suv">Suv</Option>
                            <Option value="wagon">Wagon</Option>
                            <Option value="minivan">Minivan</Option>
                        </Select>
                    </div>

                    <div className='form-case'>
                        <label for='descrizione'>Descrizione</label>
                        <textarea name='description' onChange={this.handleChange} />
                    </div>
                    <div className='form-case'>
                        <label for='prezzo'>Prezzo</label>
                        <input type='text' name='price' onChange={this.handleChange} />
                    </div>

                    <div className='form-case'>
                        <label>Servizio</label>
                        <br></br>
                        <Radio.Group onChange={this.handleChange} name='servizio' value={this.state.servizio}>
                            <Radio name='vendita' value='vendita'>Vendita</Radio>
                            <Radio name='nolleggio' value='nolleggio'>Nolleggio</Radio>
                        </Radio.Group>
                    </div>
                    <button type='submit' className='sign-btn' onClick={e => {
                        e.prevent.default()
                        if (this.props.save) {
                            this.props.editCar(this.state)
                            this.props.clearCar()
                        } else {
                            this.props.addCar(this.state)
                        }
                        this.setState({ img: '', name: '', brand: '', classe: '', description: '', price: '', service: '' })
                    }}>
                        Aggiungi
                </button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        save: state.car.saved
    }
}
export default connect(mapStateToProps, { addCar, EditCar, clearCar, loadUser })(AddCar)

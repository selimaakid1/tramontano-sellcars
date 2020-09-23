import React, { Component } from 'react'
import {connect} from 'react-redux'
import CarItem from './CarItem';
class CarList extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div className='car-list'>
                <h1></h1>
                {this.props.allCars.cars.map(el => <CarItem car={el} />)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        allCars: state.car 
    }
}
export default connect(mapStateToProps)(CarList)
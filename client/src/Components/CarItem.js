import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

class CarItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='car-card'>
                <Container className='car-container'>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.car.img} />
                        <Card.Body>
                            <Card.Title>{this.props.car.name}</Card.Title>
                            <Card.Text>
                                {this.props.car.description}
                            </Card.Text>
                            <Card.Text>
                                {this.props.car.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(null, mapDispatchToProps)(CarItem)
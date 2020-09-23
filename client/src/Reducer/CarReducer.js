import { ADD_CAR, DELETE_CAR, EDIT_CAR} from '../Actions/types'
import { v4 as uuidv4 } from 'uuid'
import { DeleteCar } from '../Actions/CarActions'

const initState = [{
id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc90bmc701a021001.png',
name: 'BMW M2',
brand: 'bmv',
class: 'coupe',
description: '',
price: '',
service: 'rent'
},{
    id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10jac142a021001.png',
name: 'Jaguar F-TYPE',
brand: 'jaguar',
class: 'convertible',
description: '',
price: '',
service: 'buy'
},{
    id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10bmc971a021001.png',
name: 'BMW M440',
brand: 'bmv',
class: 'coupe',
description: '',
price: ''
},{
    id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10bmc971a021001.png',
name: 'BMW M440',
class: 'coupe',
description: '',
price: ''
},{
    id: uuidv4(),
    img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc90bmc701a021001.png',
    name: 'BMW M2',
    brand: 'bmv',
    class: 'coupe',
    description: '',
    price: ''
    },{
        id: uuidv4(),
    img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10jac142a021001.png',
    name: 'Jaguar F-TYPE',
    brand: 'jaguar',
    class: 'convertible',
    description: '',
    price: ''
    },{
        id: uuidv4(),
        img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc90bmc701a021001.png',
        name: 'BMW M2',
        brand: 'bmv',
        class: 'coupe',
        description: '',
        price: ''
        },{
            id: uuidv4(),
        img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10jac142a021001.png',
        name: 'Jaguar F-TYPE',
        brand: 'jaguar',
        class: 'convertible',
        description: '',
        price: ''
        }

]

const CarReducer = (state = {cars : initState}, action) => {
    switch(action.type){
        case ADD_CAR:
            return {
                ...state, cars: state.cars.concat(action.payload)
            }
        case DELETE_CAR:
            return{
                ...state,
                cars: state.cars.filter(el => el.id !== action.payload)
            }
        case EDIT_CAR:
            return{
                ...state,
                cars: state.cars.map(el => 
                    el.id === action.payload.id
                    ? {
                        ...el, ...action.payload.updatedCar
                    } : el)
            }
        default: 
        return state
    }
}
export default CarReducer
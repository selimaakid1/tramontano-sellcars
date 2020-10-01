import { ADD_CAR, DELETE_CAR, EDIT_CAR, SAVE_CAR, CLEAR_CAR, CAR_ERROR} from '../Actions/types'
import { v4 as uuidv4 } from 'uuid'


const initState = {
    cars:[{
id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc90bmc701a021001.png',
name: 'BMW M2',
brand: 'bmv',
classe: 'coupe',
description: '24.0000km',
price: '52.000€',
service: 'rent'
},{
    id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10jac142a021001.png',
name: 'Jaguar F-TYPE',
brand: 'jaguar',
classe: 'convertible',
description: '',
price: '',
service: 'vendita'
},{
    id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10bmc971a021001.png',
name: 'BMW M440',
brand: 'bmv',
classe: 'coupe',
description: '',
price: ''
},{
    id: uuidv4(),
img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10bmc971a021001.png',
name: 'BMW M440',
classe: 'coupe',
description: '',
price: ''
},{
    id: uuidv4(),
    img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc90bmc701a021001.png',
    name: 'BMW M2',
    brand: 'bmv',
    classe: 'coupe',
    description: '',
    price: ''
    },{
        id: uuidv4(),
    img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10jac142a021001.png',
    name: 'Jaguar F-TYPE',
    brand: 'jaguar',
    classe: 'convertible',
    description: '',
    price: ''
    },{
        id: uuidv4(),
        img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc90bmc701a021001.png',
        name: 'BMW M2',
        brand: 'bmv',
        classe: 'coupe',
        description: '',
        price: ''
        },{
            id: uuidv4(),
        img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd10jac142a021001.png',
        name: 'Jaguar F-TYPE',
        brand: 'jaguar',
        classe: 'convertible',
        description: '',
        price: ''
        }

],
saved: null,
error: null
}

const CarReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_CAR:
            return {
                ...state,
                cars: [action.payload, ...state.cars]
            }
        case DELETE_CAR:
            return{
                ...state,
                cars: [state.cars.filter(el => el.id !== action.payload)]
            }
        case SAVE_CAR:
            return{
                ...state,
                saved: action.payload
            }
        case EDIT_CAR:
            return{
                ...state,
                cars: state.cars.map(el => 
                    el.id === action.payload.id
                    ? action.payload : el)
            }
        case CLEAR_CAR:
            return{
                ...state,
                saved: null
            }
        case CAR_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default: 
        return state
    }
}
export default CarReducer
import { ADD_CAR, CAR_ERROR, GET_CAR, CLEAR_CAR,DELETE_CAR, SAVE_CAR, EDIT_CAR } from './types'
import axios from 'axios'


export const addCar = newCar => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/car', newCar, config)
        .then(res => dispatch({
            type: ADD_CAR,
            payload: newCar
        }))
        .catch(err => dispatch({
            type: CAR_ERROR,
            payload: err.response.msg
        }))

}

export const DeleteCar = id => dispatch => {
    axios.delete(`/api/car/${id}`)
        .then(() => dispatch({
            type: DELETE_CAR,
            payload: id
        }))
        .catch(err => dispatch({
            type: CAR_ERROR,
            payload: err.response.msg
        }))

}
export const saveCar = car => dispatch => {
    dispatch({
        type: SAVE_CAR,
        payload: car
    })
}
export const EditCar = updatedCar => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.put(`/api/car/${updatedCar._id}`, updatedCar, config)
    .then(res => dispatch({
        type: EDIT_CAR,
        payload: updatedCar
    }))
    .catch(err => dispatch({
        type: CAR_ERROR,
        payload: err.response.msg
    }))

}
export const clearCar = () => dispatch => {
    dispatch({
        type: CLEAR_CAR
    })
}
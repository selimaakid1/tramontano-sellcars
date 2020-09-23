import { ADD_CAR, DELETE_CAR, EDIT_CAR} from './types'

export const addCar = newCar => {
    return {
        type: ADD_CAR,
        payload: newCar
    }
}
export const DeleteCar = id => {
    return {
        type: DELETE_CAR,
        payload: id
    }
}
export const EditCar = (id, updatedCar) => {
    return {
        type: EDIT_CAR,
        payload: {id, updatedCar}
    }
}
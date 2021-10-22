import {ADD_CONTER, ADD_TO_CART, REMOVE_CONTER} from '../constant'
import { REMOVE_TO_CART } from '../constant'
export const addToCart =(data)=>{
 
    return {
        type:ADD_TO_CART,
        data:data
    }
}


export const removeToCart =(data)=>{
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}


export const addConter = (data)=>{
   
    return {
        type: ADD_CONTER,
        data : data
    }
}

export const removeConter = (data)=>{

    console.log('Action')
    return {
        type: REMOVE_CONTER,
        data : data
    }
}
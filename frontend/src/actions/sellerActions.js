import axios from "axios"
import { SELLER_REGISTER_FAIL, SELLER_REGISTER_REQUEST, SELLER_REGISTER_SUCCESS } from "../constants/sellerConstants"


export const registerSeller = (seller) => async(dispatch) => {
    try {
        dispatch({ type: SELLER_REGISTER_REQUEST })

        const config = {
            'Content-Type': 'application/json'
        }

        const { data } = await axios.post('/api/sellers', seller, config)

        dispatch({
            type: SELLER_REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SELLER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
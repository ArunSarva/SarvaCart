import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})
export const signup = payload => api.post('/Signup', payload)
export const AddCart = payload => api.post('/AddCart', payload)
export const Addproduct = payload => api.post('/Addproduct', payload)
export const Login = payload => api.post(`/Login`,payload)
export const updateCart = (id, addedItem) => api.put(`/updateCart/${id}`,addedItem)
export const GetProduct = id => api.get(`/Getproduct`)

export const Getorder = id => api.get(`/Getorder`)
export const Deliver = id =>api.delete(`/Deliver/${id}`)
export const Remove_itemById = id => {
    
console.log(id)
api.delete(`/deletecart/${id}`)
}
export const getCart = id => api.get(`/Getcart`)

const apis = {
    signup,
    Login,
    AddCart,
    Addproduct,
    Remove_itemById,
    updateCart,
    GetProduct,
    Getorder,
    Deliver,
    getCart
}

export default apis
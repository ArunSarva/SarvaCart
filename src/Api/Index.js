import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})
export const signup = payload => api.post('/Signup', payload)

// export const getAllMovies = () => api.get(`/movies`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    signup
    // getAllMovies,
    // updateMovieById,
    // deleteMovieById,
    // getMovieById,
}

export default apis
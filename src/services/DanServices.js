import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-user-manager.herokuapp.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})


export default {
    getUsers(){
        return apiClient.get('/users')
    },
    postUser(user){
        return apiClient.post('/users', user)
    }
}
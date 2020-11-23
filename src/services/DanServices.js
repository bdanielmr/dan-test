//Import axios for fetching data from Api
import axios from 'axios'
//create a Api const that use for multiple consults from Api
const apiClient = axios.create({
    baseURL: 'https://my-user-manager.herokuapp.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})
//export get or post or patch or delete promise based HTTP client 
export default {
    getUsers(){
        return apiClient.get('/users')
    },
    postUser(user){
        return apiClient.post('/users', user)
    }
}
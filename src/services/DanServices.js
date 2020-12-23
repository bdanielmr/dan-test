//Import axios for fetching data from Api
import axios from 'axios'
//create a Api const that use for multiple consults from Api
const apiClient = axios.create({
    baseURL: 'http://cors-anywhere.herokuapp.com/https://api-express-usuarios.herokuapp.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})
//export get or post or patch or delete promise based HTTP client 
export default {
    getUsers(){
        return apiClient.get('/api')
    },
    postUser(user){
        return apiClient.post('/users', user)
    }
}
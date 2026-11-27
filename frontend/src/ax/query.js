import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

service.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('apiToken')
        if (token){
            config.headers.Authorization = 'Bearer ${token}'
        }

        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) =>{
        return response
    },

    (error) =>{
        const status = error.response?.status
        if (status === 401){
            console.error('Нет авторизации!')
        }
        return Promise.reject(error)
    }
)

export default service
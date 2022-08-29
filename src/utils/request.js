import axios from 'axios';

const service = axios.create ({
})

service.interceptors.request.use(
    config => {
        return config
    }
)

service.interceptors.response.use(
    response => {
        const {data} = response
        // if(data.status == 2){

        // }
        return data
    }
)

export default service
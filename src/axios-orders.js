import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-48ede.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://exam-js.firebaseio.com/"
});

export default instance;
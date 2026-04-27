import axios from 'axios';

export default axios.create({
    baseURL:'http://18.188.55.218:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

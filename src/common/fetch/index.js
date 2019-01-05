import axios from 'axios';
import cookies from '../../common/utils/cookies';

import store from '../../store';



let fetch = axios.create({
    timeout: 100 * 1000,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }
});

fetch.interceptors.request.use(
    config => {
        // console.log(cookies.get('userInfo')['authorization']);
        config.headers['Authorization'] = cookies.get('userInfo') && cookies.get('userInfo')['authorization'] ? cookies.get('userInfo')['authorization'] : '';
        // console.log(config.headers);
        // Do something before request is sent


        console.log(config);
            
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
fetch.interceptors.response.use(
    response => {
        if (response.headers['authorization']) {
            response.data.authorization = response.headers['authorization'];
        }

        if (response.data.code == 10001 || response.data.code == 10002 || response.data.code == 10003 || response.data.code == 10004) {
            store.commit('removeUserInfo');
            location.href = '/#/login';
        }


        // Do something with response data
        if (response.data) {
            return response.data;
        } else {
            return response;
        }

    },
    error => {
        // Do something with response error
        // console.log(eroor);
        return Promise.reject(error);
    }
);

export default fetch;
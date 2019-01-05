import axios from 'axios';
import cookies from '../../common/utils/cookies';

import store from '../../store';



let fetch = axios.create({
    timeout: 100 * 1000,
    headers: {
        post: {
            'Content-Type': 'multipart/form-data'
        }
    }
});

fetch.interceptors.request.use(
    config => {
        // console.log(cookies.get('userInfo')['authorization']);
        config.headers['Authorization'] = cookies.get('userInfo') && cookies.get('userInfo')['authorization'] ? cookies.get('userInfo')['authorization'] : '';
        // console.log(config.headers);
        // Do something before request is sent



        // console.log(config.method == 'post');
        // if (config.method == 'post') {

        //     config.headers.post['Content-Type'] = 'multipart/form-data';
        // }



        // console.log(config);
        // if (config.isUpload) {
        //     let form = new FormData();
        //     form.append('worktime', config.data.worktime);
        //     form.append('file', config.file);
        //     config.headers.post['Content-Type'] = 'multipart/form-data';
        //     config.data = form;
        // }

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
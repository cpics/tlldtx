
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';

import Notify from '@wcjiang/notify';

import biaojiyichang from './assets/audio/biaojiyichang.mp3';
import dingdanwancheng  from './assets/audio/dingdanwancheng.mp3';
import quxiaoyichang  from './assets/audio/quxiaoyichang.mp3';
import xindedingdan  from './assets/audio/xindedingdan.mp3';

import promise from 'es6-promise';
promise.polyfill();

window.biaojiyichang = new Notify({
    message: '标记异常.', // page title.
    effect: 'flash', // flash | scroll, Flashing or scrolling
    openurl: '',
    // Optional playback sound
    audio: {
        // You can use arrays to pass sound files in multiple formats.
        // file: ['msg.mp4','msg.mp3','msg.wav']
        // The following is also work.
        file: biaojiyichang
    },
    // Title flashing, or scrolling speed
    interval: 1000,
    // Optional, default green background white text. Favicon
    updateFavicon: {
        // favicon font color
        textColor: '#fff',
        // Background color, set the background color to be transparent, set the value to "transparent"
        backgroundColor: 'transparent'
    },
});
window.dingdanwancheng = new Notify({
    message: '订单完成', // page title.
    effect: 'flash', // flash | scroll, Flashing or scrolling
    openurl: '',
    // Optional playback sound
    audio: {
        // You can use arrays to pass sound files in multiple formats.
        // file: ['msg.mp4','msg.mp3','msg.wav']
        // The following is also work.
        file: dingdanwancheng
    },
    // Title flashing, or scrolling speed
    interval: 1000,
    // Optional, default green background white text. Favicon
    updateFavicon: {
        // favicon font color
        textColor: '#fff',
        // Background color, set the background color to be transparent, set the value to "transparent"
        backgroundColor: 'transparent'
    },
});
window.quxiaoyichang = new Notify({
    message: '取消异常.', // page title.
    effect: 'flash', // flash | scroll, Flashing or scrolling
    openurl: '',
    // Optional playback sound
    audio: {
        // You can use arrays to pass sound files in multiple formats.
        // file: ['msg.mp4','msg.mp3','msg.wav']
        // The following is also work.
        file: quxiaoyichang
    },
    // Title flashing, or scrolling speed
    interval: 1000,
    // Optional, default green background white text. Favicon
    updateFavicon: {
        // favicon font color
        textColor: '#fff',
        // Background color, set the background color to be transparent, set the value to "transparent"
        backgroundColor: 'transparent'
    },
});
window.xindedingdan = new Notify({
    message: '新的订单.', // page title.
    effect: 'flash', // flash | scroll, Flashing or scrolling
    openurl: '',
    // Optional playback sound
    audio: {
        // You can use arrays to pass sound files in multiple formats.
        // file: ['msg.mp4','msg.mp3','msg.wav']
        // The following is also work.
        file: xindedingdan
    },
    // Title flashing, or scrolling speed
    interval: 1000,
    // Optional, default green background white text. Favicon
    updateFavicon: {
        // favicon font color
        textColor: '#fff',
        // Background color, set the background color to be transparent, set the value to "transparent"
        backgroundColor: 'transparent'
    },
});


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

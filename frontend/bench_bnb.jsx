import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// WINDOW TESTING DELETE 

// import { postUser, postSession, deleteSession } from './util/api_util';

// import { login, logout } from './actions/session_actions';

import { fetchBenches } from './util/bench_api_util';
window.fetchBenches = fetchBenches;

// window.testUser = {
//     username: "goodsheep",
//     password: "finger69",
//     email: "goodsheep@mail.com"
// };

// window.postUser = postUser;
// window.postSession = postSession;
// window.deleteSession = deleteSession;
// window.login = login;
// window.logout = logout;
// window.testBench = {
//     description: "a new bench",
//     lat: 37.7559157, 
//     lng: -122.4388047,
// };
////////////////////


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if(window.currentUser){
        const preLoadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preLoadedState);
        delete window.currentUser;
    }else{
        store = configureStore();
    }
    // // WINDOW TESTING //
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // //////////////////////

    ReactDOM.render(<Root store={store} />, root )
});
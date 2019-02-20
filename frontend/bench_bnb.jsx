import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// WINDOW TESTING DELETE 

// import { postUser, postSession, deleteSession } from './util/api_util';

// import { login, logout } from './actions/session_actions';

import { postReview } from './util/review_api_util';

window.postReview = postReview;

window.testReview = {
    author_id: 1,
    comments: "a great bench!",
    bench_id: 8,
    rating: 5
};

import { getBenches, createBench } from './util/bench_api_util';

import { fetchBenches } from './actions/bench_actions';
window.fetchBenches = fetchBenches;
window.getBenches = getBenches;

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

window.createBench = createBench;

window.testBench = {
    description: "a new bench",
    lat: 37.2559157, 
    lng: -122.5388047,
    seating: 2
};



window.testfilter = {
    bounds: {
    southWest: { lat: 37.77, lng: -122.45 },
    northEast: { lat: 37.78, lng: -122.43 }
    }
};


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
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // //////////////////////

    ReactDOM.render(<Root store={store} />, root )
});
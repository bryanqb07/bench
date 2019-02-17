import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

// WINDOW TESTING DELETE 

import { postUser, postSession, deleteSession } from './util/api_util';



window.testUser = {
    username: "goodsheep",
    password: "finger69",
    email: "goodsheep@mail.com"
};

window.postUser = postUser;
window.postSession = postSession;
window.deleteSession = deleteSession;

////////////////////


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // WINDOW TESTING //
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //////////////////////

    ReactDOM.render(<h1> Welcome to BenchBnb</h1>, root )
});
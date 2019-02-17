import React from 'react';
import ReactDOM from 'react-dom';

// WINDOW TESTING DELETE 

import { signup, login, logout } from './util/api_util';

window.testUser = {
    username: "goodsheep",
    password: "finger69",
    email: "goodsheep@mail.com"
};

window.signup = signup;
window.login = login;
window.logout = logout;

////////////////////


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1> Welcome to BenchBnb</h1>, root )
});
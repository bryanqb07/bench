import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';

export default () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </header>
    </div>
)
import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import { AuthRoute } from '../util/route_util';
import BenchIndexContainer from './benches/bench_index_container';

export default () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <Route exact path="/"  component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={BenchIndexContainer} />
        </header>
    </div>
)
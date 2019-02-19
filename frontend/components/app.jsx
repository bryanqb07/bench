import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './benches/search_container';
import BenchFormContainer from './benches/bench_form_container';

export default () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <Route exact path="/"  component={GreetingContainer} />

        </header>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
            <Route exact path="/" component={SearchContainer} />
    </div>
)
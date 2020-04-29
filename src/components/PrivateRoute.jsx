import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: ComponentName, ...targetPath }) => (
    <Fragment>
            <Route  
                {...targetPath}
                render={ props => localStorage.getItem("token") ? (
                    <ComponentName {...props} />
                ) : (
                    <Redirect to="/" />
                )}
            />
    </Fragment>
)

export default PrivateRoute;

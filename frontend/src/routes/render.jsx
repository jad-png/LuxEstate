import React from 'react';
import { Route } from "react-router";
import PropTypes from "prop-types";
import ProptectedRoute from './proptectedRoute';



const render = (routes) => {
    return routes.map(({ path, component: Component, layout: Layout, roles }) => {
        const content =  roles ? (
            <ProptectedRoute allowedRoles={roles}>
                <Component />
            </ProptectedRoute>
        ) : (
            <Component />
        );
        
        return (
            <Route key={path} path={path} element={Layout ? <Layout /> : content}>
                {Layout && <Route index element={content} />}
            </Route>
        );
    });
}

render.PropTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            component: PropTypes.elementType.isRequired,
            layout: PropTypes.elementType,
            roles: PropTypes.arrayOf(PropTypes.number),
        }).isRequired
    )
};


export default render;
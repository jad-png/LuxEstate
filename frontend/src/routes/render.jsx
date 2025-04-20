import React from 'react';
import { Route } from "react-router";
import PropTypes from "prop-types";



const render = (routes) => {
    return routes.map(({ path, component: Component, layout: Layout }) => {
        const element = <Component />;
        return (
            <Route key={path} path={path} element={Layout ? <Layout /> : element}>
                {Layout && <Route index element={element} />}
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
        }).isRequired
    )
};


export default render;
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import ProtectedRoute from "../components/ProtectedRoute";


const render = (routes) => {
    return routes.map(({path, component: Component, layout: Layout}) => {
        const element = (
                <Layout>
                    <Component />
                </Layout>
        );
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
import { Route } from "react-router-dom";
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

export default render;